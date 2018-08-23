/*  

Contains navigation to each primary section of app.

*/

import React, { Component } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NavigationService from '../../NavigationService';
import DisplayMdText from '../../shared/text/DisplayMdText';


const ScreenWidth = Dimensions.get('window').width;

const CardWidth = ScreenWidth / 2.5;

export default class HomeDash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardStyle}>
                  
                        <TouchableOpacity 
                            style={styles.card}
                            onPress={() => NavigationService.navigate('Library')}
                        >
                            <MaterialCommunityIcons
                                name='book-open-page-variant'
                                style={styles.icon}
                            />
                            <View style={styles.heading}>
                                <View style={styles.textCont}>
                                    <DisplayMdText>
                                        Library
                                    </DisplayMdText>
                                </View>
                           </View>
                        </TouchableOpacity> 
            
                </View>
                <View style={[styles.cardStyle, styles.inactive]}>
                 
                        <TouchableOpacity 
                            style={styles.card}
                            onPress={() => NavigationService.navigate('AddCatalog')}
                        >
                            <MaterialIcons
                                name='library-add'
                                style={styles.icon}
                            
                            />
                            <View style={styles.heading}>
                                <View style={styles.textCont}>
                                    <DisplayMdText>
                                        New Catalog
                                    </DisplayMdText>
                                </View>
                            </View>
                        </TouchableOpacity>
             
                </View>
                <View style={[styles.cardStyle, styles.inactive]}>
                   
                        <TouchableOpacity 
                            style={styles.card}
                            onPress={() => NavigationService.navigate('Users')}
                        >
                            <MaterialIcons
                            name='local-library'
                            style={styles.icon}
                            />
                            <View style={styles.heading}>
                                <View style={styles.textCont}>
                                    <DisplayMdText>
                                        Librarians
                                    </DisplayMdText>
                                </View>
                            </View>
                        </TouchableOpacity>
                    
                </View>
                <View style={[styles.cardStyle, styles.inactive]}>
                   
                        <TouchableOpacity 
                            style={styles.card}
                            onPress={() => NavigationService.navigate('Settings')}
                        >
                         
                                <MaterialIcons
                                    name='settings'
                                    style={styles.icon}
                                />
                         
                            
                            <View style={styles.heading}>
                                <View style={styles.textCont}>
                                    <DisplayMdText>
                                        Settings
                                    </DisplayMdText>
                                </View>
                            </View>
                        </TouchableOpacity>
              
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    cardStyle: {
       
        elevation: 2,
        backgroundColor: '#FFF',
        borderRadius: 2,
        marginTop: 40,
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: CardWidth,
        height: CardWidth,
    },

    icon: {
        fontSize: 100,
        color: '#518199',
        padding: 20,
        alignSelf: 'center',
        
    },
    heading: {
        backgroundColor: '#0B2338',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textCont: {
        justifyContent: 'center',
    },
    inactive: {
        opacity: 0.25,
    }
});
