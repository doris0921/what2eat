import React, { Component } from 'react';
import { TouchableOpacity,AppRegistry,ScrollView,StyleSheet, Text, View, Image, Linking, ImageBackground } from 'react-native';
import { List,ListItem, Icon, PricingCard, Tile, Card } from 'react-native-elements';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';
import albums from '../json/albums.json';
import AlbumDetail from './AlbumDetail';
// Make a component
//const DATA={
//  timer:123456,
//  laps:[123,456,789,159],
//}

class PageTwo extends Component {
  state={albums:[]};
  

  componentWillMount() {
    // debugger;
    this.setState({ albums });
    console.log(this.state);
  }

  renderAlbums(){
    return this.state.albums.map(album=><AlbumDetail key={album.title} album={album} />);
  }
  render() {
    //console.log(counter)
    return (
      <ScrollView contentContainerStyle={style.container}>
        <View>
          <ImageBackground
            source={require('../assets/gyudon.png')}
            style={style.TopImg}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sett')}>
              <Image source={require('../assets/settings.png')}
                style={styles.imgSet}/>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <ImageBackground source={require('../assets/deco.png')} style={style.con}>
          <Text style={style.textWB}>午餐就吃日式丼飯！</Text>
          <Text style={style.textWM}>告野家牛丼專賣</Text>
          <Text style={{fontSize:14, color:'white', marginTop:5}}>點餐時出示此畫面，每份主餐折價20元</Text>

          <View style={style.upArrLine}>
            <Image source={require('../assets/up-arrow-white.png')}
              style={style.ArrW}/>
            <Text style={{fontSize:14, color:'white'}}> 附近店鋪 </Text>
            <Image source={require('../assets/up-arrow-white.png')}
              style={style.ArrW}/>
          </View>
        </ImageBackground>

        <View style={style.list}>
          {this.renderAlbums()}
        </View>

        <View style={style.conBase}>
          <Text style={style.textGB}>距離下一餐還有</Text>
          <CountDown
            until={14400}
            onFinish={() => alert('可以選擇下一餐囉！')}
            size={20}
            timeToShow={['H', 'M','S']}/>

          <Text style={style.textSP}>    </Text>

          <TouchableOpacity
            style={style.coupon}
            onPress={() => this.props.navigation.navigate('Coupons')}>
            <Text style={style.textGS}>最新優惠</Text>
            <Image source={require('../assets/up-arrow-green.png')}
              style={style.ArrG}/>  
          </TouchableOpacity>

        </View>

        <View style={style.emptyB}>          
        </View>
          
      </ScrollView>
      
          
    );
  }
}

const styles = StyleSheet.create({
  
  button: {
    width:'70%',
    alignItems: 'center',
    backgroundColor: '#FFBF00',
    borderRadius:12,
    padding: 10
  },
  imgSet:{
    height:42,
    width:42,
    marginTop:40,
    marginLeft:15
  },
  
});

const style={ 
  container: {
    flexgrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  TopImg:{  //午餐看板的上一層
    flexgrow:1,
    width:'100%',
    height:350,
    //alignItems: 'center',
    //backgroundColor: '#E18F58', //
    //justifyContent: 'center'
  },
  con: {    //X野家
    flexgrow:1,
    width:'100%',
    height:290,
    alignItems: 'center',
    backgroundColor: '#FFBF00', 
    //justifyContent: 'center'
  },
  upArrLine:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:75
  },
  list:{ //分店
    flexgrow:1,
    width:'100%',
    height:335,
    //alignItems: 'center',
    //backgroundColor: 'black'
    //justifyContent: 'center'
  },
  conBase:{
    flexgrow:1,
    width:'100%',
    height:220,
    alignItems: 'center',
    backgroundColor: 'white', 
    //justifyContent: 'center'
  },
  coupon:{
    marginTop:5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyB:{
    flexgrow:1,
    height:18,
    backgroundColor: '#FEFEFF',
    width:'100%'
  },
// --------------------------------------
  textWB:{  //大白
    fontSize:24,
    color:'white',
    marginTop:40,
    fontWeight:'bold'
  },
  textWM:{  //中白
    fontSize:20,
    color:'white',
    marginTop:55,
    fontWeight:'bold'
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  textGB:{ //比較大的綠字
    fontSize:22,
    color:'#77A869',
    margin:25,
    fontWeight:'bold'
  },
  textGS:{  //比較小的綠字
    fontSize:15,
    color:'#77A869',
    //margin:10,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  textSP:{
    fontSize:10,
  },
  ArrW:{
    height:18,
    width:18
  },
  ArrG:{
    height:32,
    width:32
  },
  buttonText:{  //那個倒楣的按鈕
    //margin:15,
    fontSize:18,
    color:'white'
  },
}


export default PageTwo;
