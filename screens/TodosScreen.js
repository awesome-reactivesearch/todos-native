/* eslint-disable */
import React from 'react';
import { View, Text } from 'native-base';

import TodosContainer from '../components/TodosContainer';

export default class AllScreen extends React.Component {
  static navigationOptions = {
    header: (
      <View
        style={{
          height: 80,
          marginTop: 20 /* only for IOS to give StatusBar Space */,
        }}
      >
        <Text>This is CustomHeader</Text>
      </View>
    ),
  };
  render() {
    return <TodosContainer screen={this.props.navigation.state.key} {...this.props} />;
  }
}
