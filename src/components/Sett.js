import React, { Component } from 'react';
import { TouchableOpacity,AppRegistry,SectionList,StyleSheet, Text, View, Image, Linking, Switch, Alert } from 'react-native';
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

class Sett extends Component {

  constructor(){ 
    super(); 
    this.state ={  
     SwitchOnValueHolder :  false  
    }
    this.state ={  
      SwitchOnValueHolder2 :  false  
     }

  }



  ShowAlert = (value) =>{
    this.setState({   
      SwitchOnValueHolder: value
    })  
    if(value == true)
    {
      Alert.alert("提醒已開啟");
    }
    else{   
      Alert.alert("提醒已關閉");
    }   
  }

  ShowAlert2 = (value) =>{
    this.setState({   
      SwitchOnValueHolder2: value
    })  
    if(value == true)
    {
      Alert.alert("素食已開啟");
    }
    else{   
      Alert.alert("素食已關閉");
    }   
  }

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
      <View style={styles.container}>

        <View style={styles.TitleLine}>
          <Text style={style.title}>設定</Text>
          <TouchableOpacity 
            onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../assets/right-arrow-white.png')}
              style={styles.icon}/>
          </TouchableOpacity>
        </View>

        <View style={styles.conList}>
          <SectionList
            sections={[
              {title: '提醒通知', data: ['讓我們提醒您吃飯時間和最新優惠',' ']},
              {title: '素食設定', data: ['打開此選項以排除無法提供蔬食的店家',' ']},
              {title: '版本', data: ['0.1.1']},
            ]}
            renderItem={({item}) => <Text style={style.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={style.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={({item}) => <View style={styles.lineStyle}>{item}</View>}
          />
        </View>
        <Switch
          onValueChange={(value) => this.ShowAlert(value)}
          style={style.switchb}
          value={this.state.SwitchOnValueHolder} />
          <Switch
          onValueChange={(value) => this.ShowAlert2(value)}
          style={style.switchb2}
          value={this.state.SwitchOnValueHolder2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  TitleLine:{
    //flex:1,
    flexDirection: 'row',
    width:'100%',
    height:'13%',
    backgroundColor: '#FFBF00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  conList:{
    width:'100%',
    height:'80%',
    marginTop:'7%'
  },
  icon:{
    marginLeft:125,
    marginTop:19,
    width:25,
    height:25
  },
  lineStyle:{    //倒楣的線!!!!!
    marginTop:15,
    marginLeft:20,
    marginRight:20,
    height:1,
    backgroundColor:'#FFBF00',
    textDecorationLine:'underline'
  },

});

const style={ 
 title:{  //設定
  color:'white',
  fontSize:20,
  marginTop:20,
  marginLeft:145,
  fontWeight:'bold'
 },
 sectionHeader:{
  color:'#246912',
  fontSize:18,
  marginLeft:20,
  marginRight:20,
  marginBottom:5
 },
 item:{
  marginLeft:20,
  marginRight:20,
  //marginBottom:15,
  fontSize:15,
  color:'#77A869'
 },
 switchb:{
  marginLeft: 300,
  marginTop:110,
  position: 'absolute',
 },
 switchb2:{
  marginLeft: 300,
  marginTop:200,
  position: 'absolute',
 }
}


export default Sett;
