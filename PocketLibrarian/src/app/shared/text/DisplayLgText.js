import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import BaseText from './BaseText';

export default class DisplayLgText extends Component {
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
        color: '#fff',
        fontSize: 60,
        fontWeight: '400',
    }
});

