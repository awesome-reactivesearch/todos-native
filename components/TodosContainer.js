import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, FlatList, StatusBar } from 'react-native';
import { View } from 'native-base';
import { ReactiveList } from '@appbaseio/reactivesearch-native';

import Utils from '../utils';
import TODO_TYPE from '../types/todo';
import CONSTANTS from '../constants';
import COLORS from '../constants/Colors';
import Header from '../components/Header';
import TodoModel from './../api/todos';
import AddTodo from '../components/AddTodo';
import AddTodoButton from '../components/AddTodoButton';
import TodoItem from '../components/TodoItem';

const styles = StyleSheet.create({
  row: {
    top: 15,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

const propTypes = {
  screenProps: PropTypes.shape({
    todos: TODO_TYPE,
  }).isRequired,
  screen: PropTypes.oneOf([CONSTANTS.ALL, CONSTANTS.ACTIVE, CONSTANTS.COMPLETED]).isRequired,
};

export default class TodosContainer extends React.Component {
  state = {
    addingTodo: false,
  };

  componentWillMount() {
    this.api = new TodoModel('react-todos');
  }

  onAllData = (todos, streamData) => {
    // console.log('@onAllData - todos: ', todos);
    // console.log('@onAllData - streamData: ', streamData);
    const todosData = Utils.mergeTodos(todos, streamData);

    // setting todosData in screenProps to be shared between all components
    this.props.screenProps.todos.data = todosData;

    // filter data based on "screen": [All | Active | Completed]
    const filteredData = this.filterTodosData(todosData);

    return (
      <FlatList
        style={{ width: '100%', top: 15 }}
        data={filteredData || []}
        keyExtractor={item => item._id}
        renderItem={({ item: todo }) => (
          <TodoItem todo={todo} onUpdate={this.api.update} onDelete={this.api.destroy} />
        )}
      />
    );
  };

  filterTodosData = (todosData) => {
    const { screen } = this.props;

    switch (screen) {
      case CONSTANTS.ALL:
        return todosData;
      case CONSTANTS.ACTIVE:
        return todosData.filter(todo => !todo.completed);
      case CONSTANTS.COMPLETED:
        return todosData.filter(todo => todo.completed);
    }

    return todosData;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
        <ScrollView>
          <ReactiveList
            componentId="ReactiveList"
            onAllData={this.onAllData}
            stream
            defaultQuery={() => ({
              query: {
                match_all: {},
              },
            })}
            dataField="title"
            showResultStats={false}
            pagination={false}
          />
          {this.state.addingTodo ? (
            <View style={styles.row}>
              <AddTodo
                onAdd={(todo) => {
                  this.setState({ addingTodo: false });
                  this.api.add(todo);
                }}
                onCancelDelete={() => this.setState({ addingTodo: false })}
                onBlur={() => this.setState({ addingTodo: false })}
              />
            </View>
          ) : null}
        </ScrollView>
        <AddTodoButton onPress={() => this.setState({ addingTodo: true })} />
      </View>
    );
  }
}

TodosContainer.propTypes = propTypes;
