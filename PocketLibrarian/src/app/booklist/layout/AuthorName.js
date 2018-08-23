import React from 'react';

import { View } from 'react-native';
import SubTitleText from '../../shared/text/SubTitleText';

const AuthorName = ({ author }) => {
    const {
        first,
        last
    } = author;

    const {
        authorNames, 
        name 
    } = styles;

    return (
        <View style={authorNames}>
            <SubTitleText style={name}>{first}</SubTitleText>
            <SubTitleText style={name}>{last}</SubTitleText>
        </View>
    );
};

const styles = {
    authorNames: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 20,
        paddingRight: 5,
    }
};

export default AuthorName;
