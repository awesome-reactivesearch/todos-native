/* eslint-disable */
import React from 'react';

import TodosContainer from '../components/TodosContainer';

export default class AllScreen extends React.Component {
  // static navigationOptions = {
  //   header: null,
  // };
  render() {
    return <TodosContainer screen={this.props.navigation.state.key} {...this.props} />;
  }
}
