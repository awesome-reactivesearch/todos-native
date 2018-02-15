import React from 'react';
import { Header, Body, Title } from 'native-base';

import COLORS from '../constants/Colors';

const AppHeader = () => (
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
          paddingLeft: 7,
        }}
      >
        Reactive Todos
      </Title>
    </Body>
  </Header>
);

export default AppHeader;
