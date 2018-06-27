import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerStyle}>
                {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerStyle: {
    width:'88%',
    //borderWidth: 1,
    //borderRadius: 2,
    //borderColor: '#FFBF00',
    //borderBottomWidth: 0,
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.1,
    //shadowRadius: 2,
    //elevation: 1
  }
});


export default Card;
