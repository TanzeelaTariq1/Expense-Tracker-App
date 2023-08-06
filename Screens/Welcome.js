import React from 'react'
import{View,StyleSheet,ScrollView,SafeAreaView,Image,Text, ImageBackground} from 'react-native';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import Loader from '../components/Loader';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = {uri: 'https://cdn.dribbble.com/users/4242238/screenshots/9656901/media/25a9e9289c3acc78c9c7d2649b526579.png'};

const Welcome=(props)=>{
  
  
 
  return(
      
      <SafeAreaView style={{backgroundColor:'white',flex:1}}> 
   
      

         <ScrollView 
             contentContainerStyle={{
              paddingTop:50,
              paddingHorizontal:20,
             }}
         >

<Image style = {{
       height:200,
       width:200,
       marginTop:10,
       marginBottom:10,
       marginHorizontal:100,
      marginTop:70,
       borderRadius:100,
      }} source={require('E:/Expense-Tracker-App/img/img.png')}/>
        
             <Text style={{color:'teal',fontSize:40,fontWeight:'bold',textAlign:'center'}}>
               Welcome Buddy
             </Text>
             <Text style={{color:'grey',fontSize:15,marginVertical:2,justifyContent:'center',textAlign:'center'}}>
               Olga Simpson
             </Text>
             <Text style={{color:'grey',fontSize:15,marginVertical:2,justifyContent:'center',textAlign:'center'}}>
               olgasimpson@gmail.com
             </Text>
            
             
       <View style={{borderWidth: 0.5,
                                 borderColor:'black',
                                        margin:10,}}>
                    </View>
             
             <View style={{marginVertical:20}}>
             
                  <Button title="Logout"onPress={()=>props.navigation.navigate("Login")}/>
                 
      
             </View>

         </ScrollView>
      </SafeAreaView>  
  
        
      
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });

export default Welcome;



