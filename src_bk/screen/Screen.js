import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity
                        style={{ alignItems: "flex-end", margin: 16}}
                        onPress={this.props.navigation.toggleDrawer}
                    >
                        <Icon name="ios-menu" size={24} color="black" />

                    </TouchableOpacity>
                    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
        <Text style={styles.text}>{this.props.name} Screen</Text>

                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFF"
  },
  text: {
      color: "#161924",
      fontSize: 20,
      fontWeight: "500"
  }
})