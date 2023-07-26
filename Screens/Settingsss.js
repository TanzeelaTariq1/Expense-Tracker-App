import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  View,TouchableOpacity ,Text,StyleSheet,Alert} from 'react-native';
import { Fontisto } from "@expo/vector-icons";
import { theme } from '../theme';

export const Settingsss = (props) => {
    return (
      <>
      <View style ={{
       flexDirection:'row',justifyContent:'center',
        //borderRadius: 100, 
        alignItems: 'center',
         width: 400 ,
         height:50,
         backgroundColor:'lightblue',
         justifyContent:'center',
         marginHorizontal:5,
         //marginVertical:100,
         marginTop:30,
         //marginVertical:100,
         flex:0,
        }}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Categories")}
          style={styles.navBarLeftButton}>
       
       <Text style={styles.buttonText}>Categories</Text>
       <Fontisto name="angle-right" size={24} />
    </TouchableOpacity> 
          </View>
          <View style ={{
       flexDirection:'row',justifyContent:'center',
        //borderRadius: 100, 
        alignItems: 'center',
         width: 400 ,
         height:50,
         backgroundColor:'lightblue',
         justifyContent:'center',
         marginHorizontal:5,
         //marginVertical:100,
         marginTop:10,
         //marginVertical:100,
         flex:0,
        }}>
          <TouchableOpacity onPress={()=>{
            Alert.alert('Are you sure? ','This action cannot be undone',[
              {
                text:'Cancel',
                onPress:()=> console.log('Cancel Presses'),
                style:'cancel',
              },
              {
                text:'Erase data',
                
                //buttonText:'red',
                onPress:()=> console.log('Ok Presses'),
                style: 'destructive',
              }
            ])
          }}
          style={styles.navBarLeftButton}>
       
       <Text style={{
         color: 'red',
         fontSize: 20,
         marginRight:255,
       }}>Erase all data</Text>
       
    </TouchableOpacity> 
          </View>   
               
               </>    
    );
  }
const styles= StyleSheet.create({
  navBarLeftButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    paddingLeft: 8

  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    marginRight:255,
  }
})
 