import React, { Component } from 'react';
import { TouchableOpacity,ScrollView,StyleSheet, Text, View,Button, Image, Linking } from 'react-native';
import { List,ListItem, Icon, PricingCard, Tile, Card } from 'react-native-elements';

import albums from '../json/albums.json';
import AlbumDetail from './AlbumDetail';
// Make a component
class PageThree extends Component {
  state={albums:[]};

  componentWillMount() {
    // debugger;
    this.setState({ albums });
    console.log(this.state);
  }

//  renderAlbums(){
//    return this.state.albums.map(album=><AlbumDetail key={album.title} album={album} />);
//  }
  render() {

    return (
      <View style={styles.container}>
          <View style={styles.status}></View>

          <TouchableOpacity 
            style={styles.Top}
            onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../assets/down-arrow-white.png')}
              style={styles.ArrW}/>
            <Text style={style.textWS}>回到首頁</Text>
          </TouchableOpacity>
          <ScrollView horizontal={true}>
          <View style={styles.img_back}></View>
           <Image
            source={require('../assets/news-pic.png')}
            style={styles.img}/>
            <View style={styles.img_back}></View>
            <Image
            source={require('../assets/news-pic-2.png')}
            style={styles.img}/>
            <View style={styles.img_back}></View>
            <Image
            source={require('../assets/news-pic-3.png')}
            style={styles.img}/>
            <View style={styles.img_back}></View>
            </ScrollView>
          <View style={styles.emptyB}>          
          </View>
          </View>
          
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5c05a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  status:{
    height:'3%'
  },
  Top:{
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'black',
    height:'10%'
  },
  img:{
    //marginTop:8,
    height:450,
    width:280,
    borderRadius:15,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  img_back:{
    flex: 1,
    backgroundColor: '#f5c05a',
    height:450,
    width:28,
  },
  emptyB:{
    height:'10%',
    width:'100%'
  },
  ArrW:{
    height:32,
    width:32
  },
});

const style={
  textWS:{
    color:'white',
    fontSize:15
  },
  scroll: {
    flexgrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
}


export default PageThree;
