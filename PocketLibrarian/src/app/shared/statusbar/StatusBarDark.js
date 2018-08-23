import React, { Component } from 'react';
import { StatusBar } from 'react-native';

export default class StatusBarDark extends Component {
    render() {
        return (
                <StatusBar 
                    backgroundColor='#0B2338' 
                    translucent 
                />
        );
    }
}
