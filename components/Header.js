/* eslint-disable */
import React from 'react';
import { Header, Body, Title } from 'native-base';
import { Ionicons as Icon } from '@expo/vector-icons';
/* eslint-enable */

const HeaderApp = () => (
  <Header>
    <Body
      style={{
        flex: 1,
        flexDirection: 'row',
      }}
    >
      <Title>Todos</Title>
    </Body>
  </Header>
);

export default HeaderApp;
