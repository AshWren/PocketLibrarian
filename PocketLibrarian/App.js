import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppNav from './src/app/AppNav';
import NavigationService from './src/app/NavigationService';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <AppNav 
          style={styles.container}
          ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        />
      </View>
      // <AppNav navigation={this.props.navigation} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0
  }
});
