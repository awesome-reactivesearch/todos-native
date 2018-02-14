import React from 'react';
import { Platform } from 'react-native';
import { Header, Body, Title } from 'native-base';

import COLORS from '../constants/Colors';

const AppHeader = () => (
    <Header style={{ backgroundColor: COLORS.primary, height: 75 }}>
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
                    paddingTop: 20,
                }}
            >
                Reactive Todos
            </Title>
        </Body>
    </Header>
);

export default AppHeader;
