import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './Screens/Home';
import { theme } from './theme';
import { Settingsss } from './Screens/Settingsss';
import { Categories } from './Screens/Categories';
import Login from './Screens/Login';
import SignUp from './Screens/Signup';
import { ReportsBug } from './Screens/ReportsBug';
import { FrontPage } from './Screens/FrontPage';
import { Expenses } from './Screens/Expenses';
import Main from './Screens/Main';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <NavigationContainer theme = {theme}>
      <StatusBar style = 'light'/>
      <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={Home}
        />
         <Stack.Screen
        name='Login'
        component={Login}
        />
         <Stack.Screen
        name='SignUp'
        component={SignUp}
        />
        
        
         <Stack.Screen
         options={{
          headerShown:false
         }}
        name='Main'
        component={Main}
        />
        
        <Stack.Screen
        name='Categories'
        component={Categories}
        />
       
        
        
      
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
