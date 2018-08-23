import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import BaseText from './BaseText';

export default class TitleText extends Component {
    render() {
        return (
            <BaseText>
                <Text style={styles.text}>
                    {this.props.children}
                </Text>
            </BaseText>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#0B2338',        
        fontSize: 26,
        fontWeight: '500',
    }
});

