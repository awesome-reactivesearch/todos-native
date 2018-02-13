import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { FAB } from 'react-native-paper';
import COLORS from '../constants/Colors';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};

const AddTodoButton = ({ onPress }) => (
  <View
    style={{
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: 25,
    }}
  >
    <FAB icon="add" color="white" style={{ backgroundColor: COLORS.primary }} onPress={onPress} />
  </View>
);

AddTodoButton.propTypes = propTypes;

export default AddTodoButton;
