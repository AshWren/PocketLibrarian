/*  
Displays the Catalog Titles as a button 
*/

import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';


import TitleText from '../../shared/text/TitleText';

const ScreenWidth = Dimensions.get('window').width;
const CardWidth = ScreenWidth * 0.9;
const CardHeight = CardWidth / 4;

const CatalogButton = ({ children, whenPressed }) => {
    const {
        card,
        button,
   
        textContainer
    } = styles;

    return (
        <View style={card}>
            <TouchableOpacity 
                style={button}
                onPress={whenPressed}
            >
              
                    <View style={textContainer}>
                        <TitleText>
                            {children}
                        </TitleText>
                    </View>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    card: {
        
        elevation: 4,
        backgroundColor: '#C1D5E0',
        borderRadius: 2,
        marginTop: 40,
    },
    button: {
        width: CardWidth,
        height: CardHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
 
    textContainer: {

    }

});

export default CatalogButton;
