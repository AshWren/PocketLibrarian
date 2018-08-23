import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

export default class StatusBarClear extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                    backgroundColor='transparent' 
                    barStyle='dark-content'
                    translucent 
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});
