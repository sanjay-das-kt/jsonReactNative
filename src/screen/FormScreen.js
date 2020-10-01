import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const FormScreen = (props) => {

    return (

      <View style={{flex:1}}>
          <View style={styles.top}>
            <Text style={{fontSize:35, color:'#fff'}}>{props.param.LABEL}</Text>
          </View>
          <View style={styles.middle}>

            {props.param.CONTENT.FORM_CONFIG.map((item, index) => (
              
              <TextInput
              key={index}
              style={styles.input} 
              placeholder={item.FIELD_LABEL}
              placeholderTextColor = "#555CC4"
              />

            ))} 

          </View>

          <View style={styles.bottom}>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
            <Text style={styles.loginText}>Submit</Text>
            </TouchableHighlight>
          </View>
          
      </View>
      
    );
}

export default FormScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    //width:250,
    borderRadius:10,
  },
  loginButton: {
    backgroundColor: "#555CC4",
  },
  loginText: {
    color: 'white',
    fontSize:20
  },
  input: {
    borderColor:"#555CC4", 
    borderWidth:1, 
    padding:12,
    margin:10, 
    borderRadius:5
  },
  top: {
    flex: 0.2,
    backgroundColor: "#555CC4",
    alignItems:"center",
    justifyContent:"center",
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20
  },
  middle: {
    flex: 0.6,
    marginTop:30,
    paddingHorizontal:10,
  },
  bottom: {
    flex: 0.2,
    paddingHorizontal:10
  },
});
