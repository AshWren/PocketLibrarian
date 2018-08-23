/*  

*/

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import StatusBarDark from '../shared/statusbar/StatusBarDark';
import HomeHeader from './layout/HomeHeader';
import Dashboard from './layout/Dashboard';

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBarDark />
                <View style={styles.header}>
                    <HomeHeader
                        Title1={'Pocket'}
                        Title2={'Librarian'}
                    />
                </View>
                <View style={styles.dashboard}>
                    <Dashboard />
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FB',
        
    },
    header: {
        
    }
});

export default HomeScreen;
