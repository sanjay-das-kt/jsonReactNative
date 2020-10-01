import * as React from 'react';
import { Button, Text, ImageBackground, Image, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import mJson from './mobile.json'
import DynamicScreen from './screen/DynamicScreen';

/* function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
 */

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
       <ImageBackground 
            source={require("./assets/images/background.png")}
            style={{ width: undefined, padding: 16, paddingTop: 48}}
        >
            <Image source={require("./assets/images/profile.png")} style={styles.profile}/>
            <Text style={styles.name}>KrazyTech Business Solutions</Text>
        </ImageBackground>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


const Drawer = createDrawerNavigator();

export default function Navigation() {

  return (

     <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          drawerContentOptions={{
            activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
            activeTintColor: "red",
            itemsContainerStyle: {
              marginTop: 15,
              marginHorizontal: 8
            },
            itemStyle: {
              borderRadius: 4
            }
          }}
        
        >
          {mJson.menus.map((item, index) => (
            <Drawer.Screen 
              key={index} 
              name={item.NAME} 
              initialParams={{'json':item}} 
              component={DynamicScreen} 
            />
          ))}
        </Drawer.Navigator>
     </NavigationContainer>
   
  );
  
  /* return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  ); */
}

const styles = StyleSheet.create({

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


/* import React, {Component} from 'react';
import { Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    <HomeStack.Screen name="Home" 
     options={{
       title: 'Home Screen',
      headerLeft: () => (
          <Icon name="ios-menu" size={24} backgroundColor= '#009387' onPress={() => navigation.openDrawer()} />
      ),
    }}
      component={HomeScreen} 
    />

  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    <DetailsStack.Screen name="Details"
    options={{
       title: 'Detail Screen',
      headerLeft: () => (
          <Icon name="ios-menu" size={24} backgroundColor= 'red' onPress={() => navigation.openDrawer()} />
      ),
    }} component={DetailsScreen} />

  </DetailsStack.Navigator>
);



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
       <ImageBackground 
            source={require("./assets/images/background.png")}
            style={{ width: undefined, padding: 16, paddingTop: 48}}
        >
            <Image source={require("./assets/images/profile.png")} style={styles.profile}/>
            <Text style={styles.name}>KrazyTech Business Solutions</Text>
        </ImageBackground>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}



class Navigation extends Component {
  
    render() {
      return (
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="Home"
            //drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
              activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
              activeTintColor: "red",
              itemsContainerStyle: {
                marginTop: 15,
                marginHorizontal: 8
              },
              itemStyle: {
                borderRadius: 4
              }
            }}
          >
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="Details" component={DetailsStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    }
}


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


export default Navigation; */

