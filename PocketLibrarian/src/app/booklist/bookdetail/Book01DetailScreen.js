
import React, { Component } from 'react';
import { 
    Dimensions,
    Image,
    StyleSheet,
    View
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;


class Book01DetailScreen extends Component {

render() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                
            </View>
            <View style={styles.image}>
                <Image 
                    source={require('../../../assets/images/cat_01/item_01_01.jpg')}
                    style={styles.imgStyle}
                />
            </View>
            
        </View>
    );    
}
}


const styles = StyleSheet.create({
    container: {

    },
    container: {

    },
    container: {

    },
    container: {

    },
    container: {

    },
    container: {

    },
    container: {

    },
    container: {

    },
    container: {

    },
  });

  export default Book01DetailScreen;
