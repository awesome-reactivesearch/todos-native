import React from 'react';
import { Platform } from 'react-native';
import { Header, Body, Title } from 'native-base';

import COLORS from '../constants/Colors';

const HeaderApp = () => (
  <Header style={{ backgroundColor: COLORS.primary }}>
    <Body
      style={{
        flex: 1,
        flexDirection: 'row',
      }}
    >
      <Title
        style={{
          color: 'white',
          top: Platform.OS === 'ios' ? -7 : 0,
          paddingLeft: 7,
        }}
      >
        Reactive Todos
      </Title>
    </Body>
  </Header>
);

export default HeaderApp;
