/*  

*/

import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import NavigationService from '../NavigationService';
import StatusBarDark from '../shared/statusbar/StatusBarDark';
import LibraryHeader from './layout/LibraryHeader';
// import CatalogButton from './layout/CatalogButton';
import HeadlineText from '../shared/text/HeadlineText';

const ScreenWidth = Dimensions.get('window').width;
const CardWidth = ScreenWidth * 0.9;
const CardHeight = CardWidth / 4;
const ActionSize = ScreenWidth / 8;
const ActionRight = ActionSize / 2;
const AdjHeight = ScreenWidth / 0.67;

class LibraryScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <StatusBarDark />
                
                <LibraryHeader>
                    The Library
                </LibraryHeader>
                
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => NavigationService.navigate('BookList')}
                        >
                            <Entypo 
                            name='book'
                            style={styles.icon}
                            /> 
                            <View style={styles.textContainer}>
                                <HeadlineText>
                                    Books
                                </HeadlineText>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => NavigationService.navigate('BookList')}
                        >
                            <Entypo 
                            name='book'
                            style={styles.icon}
                            /> 
                            <View style={styles.textContainer}>
                                <HeadlineText>
                                    Movies
                                </HeadlineText>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => NavigationService.navigate('BookList')}
                        >
                            <Entypo 
                            name='book'
                            style={styles.icon}
                            /> 
                            <View style={styles.textContainer}>
                                <HeadlineText>
                                    Audiobooks
                                </HeadlineText>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => NavigationService.navigate('BookList')}
                        >
                            <Entypo 
                            name='book'
                            style={styles.icon}
                            /> 
                            <View style={styles.textContainer}>
                                <HeadlineText>
                                    Games
                                </HeadlineText>
                            </View>

                        </TouchableOpacity>

                        </View>
                    </ScrollView>
                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        <MaterialIcons 
                            name='add'
                            style={styles.actionIcon}
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FB',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,

    },
    buttonContainer: {
        elevation: 4,
        backgroundColor: '#C1D5E0',
        borderRadius: 2,
        marginTop: 40,
        
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: CardWidth,
        height: CardHeight,
        
    },
    icon: {
        fontSize: 75,
        color: '#518199',
        paddingLeft: 30,
    }, 
    textContainer: {
        paddingLeft: 30,

    },
    foot: {
        
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

export default LibraryScreen;
