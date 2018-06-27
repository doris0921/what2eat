import React, { Component } from 'react';
import { TouchableOpacity,AppRegistry,ScrollView,StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import { colors } from 'react-native-elements';

//import albums from '../json/albums.json';

// Make a component
class PageOne extends Component {
 // goToPageTwo = (album) => {
//    this.props.navigation.navigate('Details', { ...album });
 // };

  render() {
    return (
      <ImageBackground source={require('../assets/Homepage-background-title.png')}
        style={styles.container}>

        <View style={styles.emptyTop}>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Sett')}>
            <Image source={require('../assets/settings.png')}
              style={styles.imgSet}/>
          </TouchableOpacity>
        </View>

        <View style={styles.TextAndBtn}>
          <Text style={style.textWB}>午安！</Text>
          <Text style={style.textWB}>決定不了中午要吃什麼嗎</Text>
          <Text style={style.textWB}> </Text>
          <View style={styles.MainContainer} > 
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}       
           >
            <Text style={style.textStyle}> 今天吃什麼 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.empty}>          
        </View>

        <TouchableOpacity 
          style={styles.bottom}
          onPress={() => this.props.navigation.navigate('Coupons')}>
          <Text style={style.textWS}>最新優惠</Text>
          <Image source={require('../assets/up-arrow-white.png')}
            style={styles.ArrW}/>
        </TouchableOpacity>
        <View style={styles.emptyB}>          
        </View>
      </ImageBackground>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:null,
    height:null
  },
  button: { //普通ㄉ按鈕
    alignItems: 'center',
    //justifyContent: 'center',
    width:'50%',
    backgroundColor: '#FFBF00',
    borderRadius:12,
    padding: 10
  },
  emptyTop:{  //午安的上空
    height:'57%',
    width:'100%'
  },
  TextAndBtn:{ //午安與按鈕
    width:'100%',
    height:'25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  empty:{ //優惠的上空
    width:'100%',
    height:'8%'
  },
  bottom:{  //墊底的優惠和箭頭
    //backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
    height:'7%'
  },
  emptyB:{
    height:'3%',
    width:'100%'
  },
  ArrW:{
    height:32,
    width:32
  },
  imgSet:{
    height:42,
    width:42,
    marginTop:40,
    marginLeft:15
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const style={
  textWB:{   //午安 今天還是想不到要吃啥嗎ODO
    color:'#FCFDFD',
    fontSize:24,
    fontWeight:'bold'
  },
  textWS:{   //優惠
    color:'white',
    fontSize:15
  },
  textStyle:{ //吃啥
    fontSize:16,
    color:'white'
  },
  
}

export default PageOne;
