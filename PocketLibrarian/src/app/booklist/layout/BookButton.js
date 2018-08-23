/*  
Displays the Catalog Titles as a button 
*/

import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';


import TitleText from '../../shared/text/TitleText';
import AuthorName from './AuthorName';

const ScreenWidth = Dimensions.get('window').width;
const CardWidth = ScreenWidth * 0.9;
const CardHeight = CardWidth / 3;

const BookButton = ({ children, whenPressed }) => {
    const { 
        buttonContainer,
        imgContainer,
        imgStyle,
        labelContainer, 
        titleContainer, 
        titleStyle, 
        authorContainer
    } = styles;
    
    return (
        <TouchableOpacity 
            style={buttonContainer}
            onPress={whenPressed}
        >
            <View style={imgContainer}>
                <Image 
                    source={bookListImg}
                    style={imgStyle}
                />
            </View>
            <View style={labelContainer}>
                <View style={titleContainer}>
                    <TitleText style={titleStyle}>{title}</TitleText>
                </View>
                <View style={authorContainer}>
                    { authors.map((author, i) => 
                        <AuthorName 
                            key={i} 
                            author={author} 
                        />)}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    buttonContainer: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        width: '100%',
        backgroundColor: '#f5f7f9',
        elevation: 4,
        height: 150,
    },
    imgContainer: {
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
    },
    imgStyle: {
        width: 60,
        height: 100,
        resizeMode: 'contain',
        overflow: 'visible',
        borderWidth: 2,
        display: 'flex',
        
        
    },
    labelContainer: {
        backgroundColor: '#F5F7F9',
        flexDirection: 'column',
        height: 100,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, 
        margin: 5,
        position: 'relative'
    },
    
    titleStyle: {
        fontSize: 24,
        color: '#000'
    },
    authorContainer: {
        
    },
};


export default BookButton;
