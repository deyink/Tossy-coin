
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import HomePage from './screens/HomePage';
import SplashScreenCus from './screens/SplashScreenCus';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()



export default function App() {


    return (
      <NavigationContainer>
           <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='SplashScreen' >
         <Stack.Screen
         component={HomePage}
         name='HomePage' />
         <Stack.Screen
         component={SplashScreenCus}
         name='SplashScreen'  />

      </Stack.Navigator>
      </NavigationContainer>
       
        
    );

}

const styles = StyleSheet.create({

});