/* eslint-disable */
import React from 'react';
import { Platform } from 'react-native';
import { Header, Body, Title } from 'native-base';
import { Ionicons as Icon } from '@expo/vector-icons';

import COLORS from '../constants/Colors';
/* eslint-enable */

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
