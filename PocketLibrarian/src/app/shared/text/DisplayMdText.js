import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import BaseText from './BaseText';

export default class DisplayMdText extends Component {
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
        fontSize: 34,
        fontWeight: '400',
    }
});

