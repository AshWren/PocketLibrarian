import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NavigationService from './NavigationService';

import DisplayMdText from './shared/text/DisplayMdText';
import TitleText from './shared/text/TitleText';


export default class DrawerContainer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerTextContainer}>
                        <DisplayMdText>
                            Circulation Desk
                        </DisplayMdText>
                    </View>
                </View>
                <ScrollView>
                    <TouchableOpacity 
                        style={styles.linkContainer}
                        onPress={() => NavigationService.navigate('Home')}
                    >
                        <MaterialIcons
                            name='home'
                            style={styles.icon}
                        />
                        <View style={styles.textContainer}>
                            <TitleText>
                                Home
                            </TitleText>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.linkContainer}
                        onPress={() => NavigationService.navigate('Library')}
                    >
                        <MaterialCommunityIcons
                            name='book-open-page-variant'
                            style={styles.icon}
                        />
                        <View style={styles.textContainer}>
                            <TitleText>
                                Library
                            </TitleText>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.linkContainer}
                        onPress={() => NavigationService.navigate('Library')}
                    >
                        <MaterialIcons
                            name='library-add'
                            style={styles.icon}
                        />
                        <View style={styles.textContainer}>
                            <TitleText>
                                New Catalog
                            </TitleText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.linkContainer}
                        onPress={() => NavigationService.navigate('Library')}
                    >
                        <MaterialIcons
                            name='local-library'
                            style={styles.icon}
                        />
                        <View style={styles.textContainer}>
                            <TitleText>
                                Librarians
                            </TitleText>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <TouchableOpacity 
                        style={styles.linkContainer}
                        onPress={() => NavigationService.navigate('Library')}
                    >
                        <MaterialIcons
                            name='settings'
                            style={styles.footerIcon}
                        />
                        <View style={styles.textContainer}>
                            <TitleText>
                                Settings
                            </TitleText>
                        </View>
                    </TouchableOpacity>
                </View>
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    headerContainer: {
        backgroundColor: '#0B2338',
        paddingTop: 50,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerTextContainer: {

    },
    linkContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    icon: {
        fontSize: 30,
        color: '#518199',
        padding: 10,
    },
    textContainer: {
        paddingLeft: 10,
    },
    footerContainer: {
        backgroundColor: '#C1D5E0'
    },
    footerIcon: {
        fontSize: 24,
        padding: 10,
        color: '#0B2338',
    }
});
