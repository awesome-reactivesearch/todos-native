/* eslint react/prop-types: 0 */
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';
import CONSTANTS from '../constants';

import AllTodos from '../screens/AllScreen';
import ActiveScreen from '../screens/ActiveScreen';
import CompletedScreen from '../screens/CompletedScreen';

const commonNavigationOptions = ({ navigation }) => ({
  header: null,
  title: navigation.state.routeName,
  custom: 'mycustompropertyvalue',
});

export default TabNavigator(
  {
    [CONSTANTS.ALL]: {
      screen: AllTodos,
      navigationOptions: commonNavigationOptions,
    },
    [CONSTANTS.ACTIVE]: {
      screen: ActiveScreen,
      navigationOptions: commonNavigationOptions,
    },
    [CONSTANTS.COMPLETED]: {
      screen: CompletedScreen,
      navigationOptions: commonNavigationOptions,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case CONSTANTS.ALL:
            iconName = 'format-list-bulleted';
            break;
          case CONSTANTS.ACTIVE:
            iconName = 'filter-center-focus';
            break;
          case CONSTANTS.COMPLETED:
            iconName = 'playlist-add-check';
        }
        return (
          <MaterialIcons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
  },
);
