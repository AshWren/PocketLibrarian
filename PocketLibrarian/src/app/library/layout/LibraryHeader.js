
import React from 'react';
import { Dimensions, View } from 'react-native';

import BackButton from '../../shared/buttons/BackButton';
import DisplayMdText from '../../shared/text/DisplayMdText';

const ScreenWidth = Dimensions.get('window').width;
const AdjHeight = ScreenWidth / 5;

const LibraryHeader = ({ children }) => {
    const {
        container,
        backContainer,
        textContainer
    } = styles;

    return (
                <View style={container}>
                    <View style={backContainer}>
                        <BackButton />
                    </View>
                    <View style={textContainer}>
                        <DisplayMdText>
                            {children}
                        </DisplayMdText>
                    </View>
                    
                </View>
    
    );
};

const styles = {

    container: {
        backgroundColor: '#518199',
        padding: 5,
        flexDirection: 'row',
        height: AdjHeight,
        paddingTop: 25,
        alignItems: 'center',
    },
    backContainer: {
        paddingLeft: 10,
    },
    textContainer: {
        paddingLeft: 25,

    }
};

export default LibraryHeader;
