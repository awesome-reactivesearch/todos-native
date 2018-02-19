import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, TouchableOpacity } from 'react-native';
import { View, Body, CheckBox } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.number,
  }),
  onAdd: PropTypes.func.isRequired,
  onCancelDelete: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const defaultProps = {
  todo: {
    title: '',
    completed: false,
    createdAt: 0,
  },
};

// Renders the add todo input
class AddTodo extends Component {

}

AddTodo.propTypes = propTypes;
AddTodo.defaultProps = defaultProps;

export default AddTodo;
