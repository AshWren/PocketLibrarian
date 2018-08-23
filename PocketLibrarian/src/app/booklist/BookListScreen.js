/*  

*/

import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import ajax from '../Ajax';
import NavigationService from '../NavigationService';
import StatusBarDark from '../shared/statusbar/StatusBarDark';
import BookHeader from './layout/BookHeader';
import BookButton from './layout/BookButton';
import HeadlineText from '../shared/text/HeadlineText';
import TitleText from '../shared/text/TitleText';
import SubTitleText from '../shared/text/SubTitleText';
import AuthorName from './layout/AuthorName';

const ScreenWidth = Dimensions.get('window').width;
const CardWidth = ScreenWidth * 0.9;
const CardHeight = CardWidth / 3;
const ActionSize = ScreenWidth / 8;
const ActionRight = ActionSize / 2;
const AdjHeight = ScreenWidth / 0.67;

class BookListScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBarDark />
                
                <BookHeader>
                    Books
                </BookHeader>
                <View style={styles.title}>
                    <HeadlineText>
                        Books
                    </HeadlineText>

                </View>

                <View style={styles.description}>
                    <SubTitleText>
                        The written word.
                    </SubTitleText>

                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    
                     <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => NavigationService.navigate('Book01Detail')}
                        >
                             <View style={styles.imgContainer}>
                                <Image 
                                    source={require('../../assets/images/cat_01/item_01_01.jpg')}
                                    style={styles.imgStyle}
                                />
                            </View>
                            <View style={styles.labelContainer}>
                                <View style={styles.titleContainer}>
                                    <TitleText>
                                        Crown Duel
                                    </TitleText>
                                </View>
                                <View style={styles.authorNames}>
                                    <View style={styles.name}>
                                        <SubTitleText>
                                            Sherwood
                                        </SubTitleText>
                                    </View>
                                    <View style={styles.name}>
                                        <SubTitleText>
                                            Smith
                                        </SubTitleText>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity> 
                         </View> 

                    </ScrollView>
               
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FB',
    },
    title: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    description: {
        alignItems: 'center',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 10,

    },
    buttonContainer: {
        elevation: 4,
        backgroundColor: '#C1D5E0',
        borderRadius: 2,
        marginTop: 30,
        
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: CardWidth,
        height: CardHeight,
        padding: 5,
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
        flexDirection: 'column',
        paddingLeft: 10,
    },
    titleContainer: {
        paddingBottom: 10,
    },
    authorNames: {
        flexDirection: 'row',
    },
    name: {
        paddingRight: 5,
    },
    textContainer: {
        paddingLeft: 30,
    },
    actionContainer: {
        backgroundColor: '#C1D5E0',
        bottom: 0,
    },
    actionButton: {
        backgroundColor: '#00E8FE',
        borderRadius: 100,
        width: ActionSize,
        height: ActionSize,
        elevation: 8,
        padding: 5,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 5,
        right: ActionRight,
        marginBottom: ActionSize,
    },
    actionIcon: {
        fontSize: 48,
        color: '#fff',
    }
});

export default BookListScreen;
