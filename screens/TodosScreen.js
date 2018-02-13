/* eslint-disable */
import React from 'react';
import { View, Text } from 'native-base';

import TodosContainer from '../components/TodosContainer';

export default class AllScreen extends React.Component {
  render() {
    return <TodosContainer screen={this.props.navigation.state.key} {...this.props} />;
  }
}
