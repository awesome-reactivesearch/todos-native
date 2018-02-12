/* eslint react/prop-types: 0 */
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { View, Text } from 'native-base';

import Colors from '../constants/Colors';
import CONSTANTS from '../constants';

import TodosScreen from '../screens/TodosScreen';

// todos data to be shared between all screens
const data = [];

const commonNavigationOptions = ({ navigation }) => ({
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
  title: navigation.state.routeName,
});

const routeOptions = {
  screen: TodosScreen,
  navigationOptions: commonNavigationOptions,
};

const TabNav = TabNavigator(
  {
    [CONSTANTS.ALL]: routeOptions,
    [CONSTANTS.ACTIVE]: routeOptions,
    [CONSTANTS.COMPLETED]: routeOptions,
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
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  },
);

const TabNavExport = () => <TabNav screenProps={{ todos: { data } }} />;

export default TabNavExport;
