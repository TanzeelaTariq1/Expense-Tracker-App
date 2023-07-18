import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Expenses } from './Screens/Expenses';
import { Settingsss } from './Screens/Settingsss';
import { Add } from './Screens/Add';
import { Reports } from './Screens/Reports';
import {theme} from './theme';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Home } from './Screens/Home';



const Tab = createBottomTabNavigator();

export default function three() {
  return (
    <NavigationContainer theme = {theme}>
      <StatusBar style = 'light'/>
      <Tab.Navigator screenOptions ={{
        tabBarStyle:{
          backgroundColor:theme.colors.card,
        },
        
      }}>
       
        <Tab.Screen name="Expenses"  component={Expenses}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialCommunityIcons
                name="tray-arrow-up"
                size={24}
                color={tabInfo.focused ? "black" : "#ffffff"}
              />
            );
          },
        }}
        />
        <Tab.Screen name="Add" component={Add}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-add"
                size={24}
                color={tabInfo.focused ? "black" : "#ffffff"}
              />
            );
          },
        }}
         />
        <Tab.Screen name="Reports" component={Reports} 
         options={{
          headerTitleAlign: 'center',
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-bar-chart"
                size={24}
                color={tabInfo.focused ? "black" : "#ffffff"}
              />
            );
          },
        }}
        />
        <Tab.Screen name="Settings" component={Settingsss}
         options={{
          headerTitleAlign: 'center',
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-settings"
                size={24}
                color={tabInfo.focused ? "black" : "#ffffff"}
              />
            );
          },
        }}
         />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
