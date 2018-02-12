/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import { View } from 'native-base';
import { Paragraph, Checkbox, Colors, TouchableRipple, withTheme } from 'react-native-paper';
import { TextField } from '@appbaseio/reactivesearch-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
/* eslint-enable */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.number,
  }),
  onAddEdit: PropTypes.func.isRequired,
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

class AddEditTodo extends Component {
  constructor(props) {
    super(props);
    const { title, completed, createdAt } = this.props.todo;
    this.state = {
      title,
      completed,
      createdAt,
    };
  }

  onSubmit = () => {
    if (this.state.title.length > 0) this.props.onAddEdit(this.state);
    return null;
  };

  setStateUtil = (property, value = undefined) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    const { title, completed } = this.state;
    const { onBlur } = this.props;
    return (
      <View style={{ flex: 0, flexDirection: 'row', width: '85%' }}>
        <View style={styles.row}>
          <TouchableRipple onPress={() => this.setStateUtil('completed', !completed)}>
            <View pointerEvents="none">
              <Checkbox checked={completed} />
            </View>
          </TouchableRipple>
          <TextInput
            style={{ width: '90%' }}
            placeholder="What needs to be done?"
            autoFocus
            underLineColorAndroid="transparent"
            underlineColor="transparent"
            blurOnSubmit
            onSubmitEditing={this.onSubmit}
            onChangeText={changedTitle => this.setStateUtil('title', changedTitle)}
            value={title}
            onBlur={onBlur}
          />
        </View>
        <MaterialCommunityIcons
          name="close-circle"
          color={`${title.length > 0 ? 'black' : 'grey'}`}
          size={23}
          style={{ top: 5, left: 5 }}
          onPress={this.props.onCancelDelete}
        />
      </View>
    );
  }
}

AddEditTodo.propTypes = propTypes;
AddEditTodo.defaultProps = defaultProps;

export default AddEditTodo;
