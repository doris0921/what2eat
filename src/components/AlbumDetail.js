// Import libraries for making a component
import React from 'react';
import { TouchableOpacity, Text, View, Image, Button, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Header from './Header';

// Make a component
const AlbumDetail = ({ album }) => {
  const { url,
          store, 
          time,
          address,
          thumbnail_image,
  } = album;

  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }}/>
          </View>
          <View style={headerContentStyle}>
            <Text style={styles.textStyle}>{store}</Text>
            <Text style={styles.textStyle}>{time}</Text>
            <Text style={styles.textStyle}>{address}</Text>
          </View>
        </CardSection>
      </Card>
    );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 100,
  },
  textStyle:{
    color:'#77A869',
    fontSize:15,
    marginLeft:17
  },
  thumbnailStyle: {
    height: 30,
    width: 30
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};


// Make the component available to other parts of the app
export default AlbumDetail;
