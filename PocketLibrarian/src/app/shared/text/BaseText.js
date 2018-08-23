import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class BaseText extends Component {

    render() {
        return (
            <Text style={styles.text}>
                {this.props.children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
    }
});

