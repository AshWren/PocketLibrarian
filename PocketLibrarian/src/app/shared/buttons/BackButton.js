import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class BackButton extends Component {
    render() {
        return ( 
            <Icon
                name='arrow-back'
                style={styles.backIcon}
                onPress={() => this.props.navigation.goBack()} 
            />
        );
    }
}

const styles = StyleSheet.create({
    backIcon: {
        fontSize: 36,
        color: '#fff'
    }
});

export default withNavigation(BackButton);
