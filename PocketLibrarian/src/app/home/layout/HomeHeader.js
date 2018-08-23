import React from 'react';
import { Dimensions, View } from 'react-native';

import BaseText from '../../shared/text/BaseText';

const ScreenWidth = Dimensions.get('window').width;

const AdjHeight = ScreenWidth / 2;

const HomeHeader = (props) => {
    const {
        container,
        appTitle      
    } = styles;

    return (
        <View style={container}>
            
            <View style={appTitle}>
                <BaseText  >
                    {props.Title1}
                </BaseText>
            </View>
            <View style={appTitle}>
                <BaseText >
                    {props.Title2}
                </BaseText>
            </View>
        </View>
    );
};

const styles = {
    container: {
        backgroundColor: '#518199',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        elevation: 6,
        height: AdjHeight,
        padding: 20,
    },
    appTitle: {
        alignSelf: 'center',
    },
};

export default HomeHeader;
