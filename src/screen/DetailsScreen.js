import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
    Image,
    ImageBackground,
    Dimensions
} from "react-native";

import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base'

import Swiper from 'react-native-swiper'


export default class DetailsScreen extends React.Component { 
  render() { 
      return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
              <Text style={{fontSize:40}}>This is details screen</Text>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  containter: {
    flex:1,
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height //for full screen
  }
});

