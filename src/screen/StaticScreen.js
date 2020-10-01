import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";

export default class StaticScreen extends React.Component { 

  render() { 
      return (
        <View>
            <Text style={{fontSize:20}}>{this.props.param.CONTENT}</Text>
        </View>
      );
  }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center'
    }
});
