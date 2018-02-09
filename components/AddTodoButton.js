/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, View, Fab } from 'native-base';
import { FAB } from 'react-native-paper';
import COLORS from '../constants/Colors';
/* eslint-enable */

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

// const AddTodoButton = ({ onPress }) => (
//   <Fab
//     direction="up"
//     containerStyle={{}}
//     style={{ backgroundColor: '#5067FF' }}
//     position="bottomRight"
//     onPress={onPress}
//   >
//     <Icon name="add" />
//   </Fab>
// );

AddTodoButton.propTypes = propTypes;

export default AddTodoButton;
