import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';

export default class AddTodoButton extends Component {
  state = {
    active: false,
  };

  render = () => (
    <Fab
      active={this.state.active}
      direction="up"
      containerStyle={{}}
      style={{ backgroundColor: '#5067FF' }}
      position="bottomRight"
      onPress={() => this.setState({ active: !this.state.active })}
    >
      <Icon name="add" />
    </Fab>
  );
}
