/* eslint-disable */
import React, { Component } from 'react';
import { StyleSheet, TextInput, Dimensions, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { View, CheckBox, ListItem, Body, Card, CardItem } from 'native-base';
// import { Paragraph, Checkbox, Colors, TouchableRipple, withTheme } from 'react-native-paper';
import { TextField } from '@appbaseio/reactivesearch-native';
import { Ionicons } from '@expo/vector-icons';
import AddEditTodo from './AddEditTodo';
/* eslint-enable */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
              console.log('deleting');
              onDelete(todo);
            }}
            onBlur={() => this.setStateUtil('editing', false)}
          />
        ) : (
          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: 10,
              paddingVertical: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => this.onTodoItemToggle(todo, onAddEdit)}
              style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <CheckBox checked={todo.completed} />
              <Body
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  paddingLeft: 25,
                }}
              >
                <Text
                  style={{
                    color: todo.completed ? 'grey' : 'black',
                    textDecorationLine: todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {todo.title}
                </Text>
              </Body>
            </TouchableOpacity>
            {/*
            <TouchableWithoutFeedback
              onPress={() => this.setStateUtil('editing', true)}
              style={{ width: '100%', flex: 1 }}
            >
            */}
            <TouchableOpacity
              onPress={() => this.props.onDelete(todo)}
              style={{ paddingLeft: 25, paddingRight: 15 }}
            >
              <Ionicons
                name="ios-trash-outline"
                color={`${todo.title.length > 0 ? 'black' : 'grey'}`}
                size={23}
              />
            </TouchableOpacity>
            {/*
              </TouchableWithoutFeedback>
            */}
          </View>
        )}
      </View>
    );
  }
}

TodoItem.propTypes = propTypes;

export default TodoItem;
