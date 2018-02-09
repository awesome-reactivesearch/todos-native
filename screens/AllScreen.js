import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { View } from 'native-base';
import { ReactiveList } from '@appbaseio/reactivesearch-native';

import TodoModel from './../api/todos';
import AddTodoButton from '../components/AddTodoButton';
import TodoItem from '../components/TodoItem';
import Utils from '../utils';
import AddEditTodo from '../components/AddEditTodo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 8,
  },

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

export default class AllScreen extends React.Component {
  state = {
    addingTodo: false,
  };

  componentWillMount() {
    this.model = new TodoModel('react-todos');
  }

  onAddTodo = (todo) => {
    this.model.addTodo(todo);
  };

  onAllData = (todos, streamData) => {
    console.log('@onAllData - todos: ', todos);
    console.log('@onAllData - streamData: ', streamData);
    const todosData = Utils.mergeTodos(todos, streamData);
    return (
      <FlatList
        style={{ width: '100%', top: 15 }}
        data={todosData || []}
        keyExtractor={item => item._id}
        renderItem={({ item: todo }) => (
          <TodoItem todo={todo} onAddEdit={this.model.update} onDelete={this.model.destroy} />
        )}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ReactiveList
            componentId="ReactiveList"
            dataField="title"
            onAllData={this.onAllData}
            pagination={false}
            stream
            react={{
              and: ['AllTodosSensor'],
            }}
            showResultStats={false}
            defaultQuery={() => ({
              query: {
                match_all: {},
              },
            })}
          />
          {this.state.addingTodo ? (
            <View style={styles.row}>
              <AddEditTodo
                onAddEdit={(todo) => {
                  this.setState({ addingTodo: false });
                  this.onAddTodo(todo);
                }}
                onCancelDelete={() => this.setState({ addingTodo: false })}
              />
            </View>
          ) : null}
        </ScrollView>
        <AddTodoButton onPress={() => this.setState({ addingTodo: true })} />
      </View>
    );
  }
}
