/* import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    </NavigationContainer>
  );
} */

/* import 'react-native-gesture-handler';
import * as React from 'react';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import HistoryScreen from './screen/HistoryScreen';
import CartScreen from './screen/CartScreen';
  
  const TabNavigator = createMaterialBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
            </View>
          ),
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#a3c2fa',
          barStyle: { backgroundColor: '#2163f6' },
        }
      },
      History: {
        screen: HistoryScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-images'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#92c5c2',
          barStyle: { backgroundColor: '#2c6d6a' },
        }
      },
      Cart: {
        screen: CartScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#ebaabd',
          barStyle: { backgroundColor: '#d13560' },
        }
      },
    },
    {
      initialRouteName: 'Home',
      activeColor: '#ffffff',
      inactiveColor: '#bda1f7',
      barStyle: { backgroundColor: '#6948f4' },
    }
  );
  
export default createAppContainer(TabNavigator);  */



/*
import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import { ProfileScreen, CartScreen, HistoryScreen, HomeScreen } from "./screen";
import SideBar from "./components/SideBar";


const appp = {
   
  HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        drawerIcon: ({ tintColor }) => <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
      }
  },
  ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        drawerIcon: ({ tintColor }) => <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
      }
  },
  CartScreen: {
      screen: CartScreen,
      navigationOptions: {
        title: "Cart",
        drawerIcon: ({ tintColor }) => <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
      }
  },
  HistoryScreen: {
    screen: HistoryScreen,
    navigationOptions: {
      title: "History",
      drawerIcon: ({ tintColor }) => <Icon style={[{color: tintColor}]} size={25} name={'ios-images'} />
    }
  }
}

const DrawerNavigator = createDrawerNavigator(
  appp,
  {
    contentComponent: props => <SideBar {...props} />,

    drawerWidth: Dimensions.get("window").width * 0.85,

    contentOptions: {
      activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
      activeTintColor: "red",
      itemsContainerStyle: {
        marginTop: 15,
        marginHorizontal: 8
      },
      itemStyle: {
        borderRadius: 4
      }
    }
  }
)  

export default createAppContainer(DrawerNavigator);

*/





//import * as React from 'react';
import React, {Component} from 'react';
import { View, Text, ScrollView, ImageBackground, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import appJson from "../AppConfig";


//const list = appJson.MENU.map((item, index) => {


//});

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen Constant</Text>
    </View>
  );
};

const HomeScreen = () => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen Constant</Text>
    </View>
  );
};

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








class App extends Component {
  
    render() {
      return (
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="Home"
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

export default App;


