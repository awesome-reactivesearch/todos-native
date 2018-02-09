/* eslint-disable */
import React, { Component } from 'react';
import { StyleSheet, TextInput, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { Paragraph, Checkbox, Colors, TouchableRipple, withTheme } from 'react-native-paper';
import { TextField } from '@appbaseio/reactivesearch-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AddEditTodo from './AddEditTodo';
/* eslint-enable */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },

  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

const propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.number,
  }).isRequired,
  onAddEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  onTodoItemToggle = (todo, propAction) => {
    propAction({
      ...todo,
      completed: !todo.completed,
    });
  };

  setStateUtil = (property, value = undefined) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    const { todo, onAddEdit, onDelete } = this.props;
    const { editing } = this.state;
    const { _id } = todo;

    return (
      <View style={styles.row}>
        {editing ? (
          <AddEditTodo
            todo={todo}
            onAddEdit={(editedTodo) => {
              this.setStateUtil('editing', false);
              onAddEdit({
                _id,
                ...editedTodo,
              });
            }}
            onCancelDelete={() => {
              this.setStateUtil('editing', false);
              onDelete(todo);
            }}
          />
        ) : (
          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableRipple onPress={() => this.onTodoItemToggle(todo, onAddEdit)}>
              <View pointerEvents="none">
                <Checkbox checked={todo.completed} />
              </View>
            </TouchableRipple>
            <TouchableWithoutFeedback
              onPress={() => this.setStateUtil('editing', true)}
              style={{ width: '100%', flex: 1 }}
            >
              <View style={{ width: '100%' }}>
                <Text>{todo.title}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    );
  }
}

TodoItem.propTypes = propTypes;

export default TodoItem;
