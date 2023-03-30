import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useLinkTo} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

import React from "react";

import {HomeScreen} from './components/HomeScreen';
import {MXConnectWidget} from './components/MXConnectWidget';
import {NotFound} from './components/NotFound';
import {Nav} from './components/Nav';
// import {MXConnectWidget} from './components/MXConnectWidget'

const config ={
  screens: {
    Home: 'index',
    MXConnect: 'widget',
    NotFound: '*',
  },
};

const linking = {
  prefixes: [Linking.createURL('/'), 'https://mx.com', 'mx://', 'https://u.expo.dev', 'mx'],
  config
};

export default function App() {
  const linkTo = useLinkTo();
  const url = Linking.useURL();
  const redirectUrl = Linking.createURL();
  const Stack = createNativeStackNavigator();
  
  
  if (url) {
    console.log(url);
    const urlParams = Linking.parse(url);
    const path = urlParams["path"] ;
    console.log(Linking.parse(url));
    // console.log(linking)
  };
  
  
  return (    
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {() => <HomeScreen url={url} />}
        </Stack.Screen>
        <Stack.Screen name="MXConnect">
          {() => <MXConnectWidget url={url} />}
        </Stack.Screen>
        <Stack.Screen name="NotFound">
          {() => <NotFound url={url} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
