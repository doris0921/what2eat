import React, { Component } from 'react';
import { ScrollView,StyleSheet, Text, View,Button, Image, Linking } from 'react-native';

const DATA={
    timer:123456,
    laps:[123,456,789,159],
}

function Timer({ interval}){
    return <Text>{interval}</Text>
}
export default class Timer extends Component{

    render(){
        return(
            <View>
                <Timer interval={DATA.timer}/>
            </View>

        );
    }
}


const style={
    textStyle:{
      fontSize:24,
      color:'white',
      margin:15,
      alignItems: 'center',
      justifyContent: 'center'
    },
  }