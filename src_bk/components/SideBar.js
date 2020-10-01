import React from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from "react-native";
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export default Sidebar = props => (
    <ScrollView>
        <ImageBackground 
            source={require("../assets/images/background.png")}
            style={{ width: undefined, padding: 16, paddingTop: 48}}
        >
            <Image source={require("../assets/images/profile.png")} style={styles.profile}/>
            <Text style={styles.name}>KrazyTech Business Solutions</Text>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props}/>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: 'white',
        fontWeight: "800",
        fontSize: 18,
        marginVertical: 8
    }
});