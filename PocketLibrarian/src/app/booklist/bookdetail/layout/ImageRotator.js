
import React, { Component } from 'react';
import { 
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    View
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const xOffset = new Animated.Value(0);

const FrontCover = ({ imgURI, index }) => {
    return (
        <View style={styles.scrollPage}>
            <Animated.View 
                style={[styles.screen, transitionAnimation(index)]}
            >
                <Image 
                    source={{ uri: imgURI }}
                    style={styles.imgStyle}
                />
            </Animated.View>
        </View>
    );
};

const AdditionalImages = ({ addImg, index }) => {
    const {
        addImgItem
    } = addImg;
    return (
        <View style={styles.scrollPage}>
            <Animated.View 
                style={[styles.screen, transitionAnimation(index)]}
            >
                <Image 
                    source={{ uri: addImgItem }}
                    style={styles.imgStyle}
                />
            </Animated.View>
        </View>
    );
};

const transitionAnimation = index => {
    return {
      transform: [
        { perspective: 1000 },
        {
          scale: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: [0.25, 0.75, 0.25]
          })
        },
        {
          rotateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: ['180deg', '0deg', '-180deg']
          })
        }
      ]
    };
};

class ImageRotator extends Component {

render() {

    return (
        <Animated.ScrollView
            scrollEventThrottle={14}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: xOffset } }
                }],
                { useNativeDriver: true }
            )}
            horizontal
            pagingEnabled
            style={styles.scrollView}
        >
            <FrontCover imgURI={this.props.frontCoverImg} index={0} />
            { this.props.additionImg.map((addImg, i) =>
                <AdditionalImages 
                    key={i}
                    index={i + 1}
                    addImg={addImg}
                />
            )}

        </Animated.ScrollView>
    );    
}


}


const styles = StyleSheet.create({
    scrollView: {
      flexDirection: 'row',
      backgroundColor: '#00d4ff',
      flex: 1
    },
    scrollPage: {
      width: SCREEN_WIDTH,
      padding: 20
    },
    screen: {
      height: 600,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: 'white'
    },
    text: {
      fontSize: 45,
      fontWeight: 'bold'
    },
    imgStyle: {
        width: 180,
        height: 300,
    }
  });

  export default ImageRotator;
