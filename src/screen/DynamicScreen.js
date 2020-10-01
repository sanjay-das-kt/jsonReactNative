import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import StaticScreen from "./StaticScreen";
import FormScreen from "./FormScreen";
import Icon from 'react-native-vector-icons/Ionicons';

export default class DynamicScreen extends React.Component { 

  render() { 
      const param = this.props.route.params.json;
      return (
        <View style={{flex:1, backgroundColor:'#FFF'}}>
           <View style={styles.headerBar}>
              <Icon name="ios-menu" color="#FFF" size={24} onPress={() => this.props.navigation.openDrawer()}/>
              <Icon name="md-notifications" color="#FFF" size={24}/>
            </View>
         
          {param.TYPE == 'static' &&
            <StaticScreen param={param}/>
          }

          {param.TYPE == 'form' &&
            <FormScreen param={param}/>
          }

        </View>
      );
  }
}

const styles = StyleSheet.create({
    headerBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding:10,
      backgroundColor: '#555CC4'
    }
}); 
