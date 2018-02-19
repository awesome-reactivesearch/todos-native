import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { View, Text } from 'native-base';

import TodoModel from './../api/todos';
import Header from '../components/Header';
import COLORS from '../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    row: {
        top: 15,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// will render todos based on the active screen: all, active or completed
export default class TodosContainer extends React.Component {
    componentDidMount() {
        // includes the methods for creation, updation and deletion
        this.api = new TodoModel('react-todos');
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
                <View style={styles.center}>
                    <Text>Todos Container</Text>
                </View>
            </View>
        );
    }
}
