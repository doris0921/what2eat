import React, { Component } from 'react';
import { ScrollView, StyleSheet,View } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

// Make a component
class Setting extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      // title: 'Setting',
      // tabBarLabel: 'Setting',
      // tabBarIcon: ({ tintColor }) => <Icon name="build" size={35} color={tintColor} />,
     // drawerLabel: 'Setting',
     // drawerIcon: ({ tintColor }) => <Icon name="build" size={25} color={tintColor} />,

    };
}

  render() {
    return (
      <View Style={styles.container}>
          <List>
          <ListItem
              title="設定"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <ListItem
              title="提醒通知"
              hideChevron
            />
            <ListItem
              title="素食設定" hideChevron
            />
            <ListItem
              title="版本" hideChevron
            />
          </List>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#bc5100',

  },
});

export default Setting;
