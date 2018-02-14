import Expo from 'expo';
import React from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Spinner } from 'native-base';
import { ReactiveBase } from '@appbaseio/reactivesearch-native';

import CONFIG from '../constants/Config';
import COLORS from '../constants/Colors';
import MainTabNavigator from './MainTabNavigator';

const RootStackNavigator = StackNavigator({
    Main: {
        screen: MainTabNavigator,
    },
});

export default class RootNavigator extends React.Component {
    state = {
        isReady: false,
    };
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            Ionicons: require('native-base/Fonts/Ionicons.ttf'),
        });

        this.setState({ isReady: true });
    }

    renderStatusBar = () => <StatusBar backgroundColor={COLORS.secondary} barStyle="dark-content" />;

    render = () => {
        if (!this.state.isReady) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {this.renderStatusBar()}
                    <Spinner color={COLORS.primary} />
                </View>
            );
        }

        const spaceFixer = Platform.OS === 'ios' ? -45 : -90;

        return (
            <ReactiveBase app={CONFIG.app} credentials={CONFIG.credentials} type={CONFIG.type}>
                <Container style={{ marginTop: spaceFixer }}>
                    <RootStackNavigator />
                </Container>
            </ReactiveBase>
        );
    };
}
