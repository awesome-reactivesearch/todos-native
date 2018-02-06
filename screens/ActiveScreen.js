import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';

import { ExpoLinksView } from '@expo/samples';
import AddTodoButton from '../components/AddTodoButton';

export default class ActiveScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddTodoButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
