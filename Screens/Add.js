import { KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Recurrence } from '../types/recurrence';

export const Add = (props) => {
  
  (
    Recurrence.None
    );

    return (
    
       <>
          <KeyboardAvoidingView
              behavior='padding'
              keyboardVerticalOffset={112}
              style={{
               flex:1,
              
              }}
          >
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
         marginTop:16,
         //marginVertical:100,
         flex:0,
         borderRadius:11,
        }}>
          <TouchableOpacity onPress={''}
          style={styles.navBarLeftButton}>
       <Text style={{
               color: 'black',
               fontSize: 20,
               paddingRight:260,
               textAlign:'left'
            }}>Amount</Text>
      <TextInput style ={{
         borderRadius:8,
         backgroundColor:'teal',
         textAlign:'right',
         //flex:0.75,
         paddingRight:8,
         
      }} placeholder='Amount'
         placeholderTextColor='white'
         
      />
        
          
      
            
       
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
         marginTop:16,
         //marginVertical:100,
         flex:0,
         borderRadius:11,
        }}>
          <TouchableOpacity onPress={''}
          style={styles.navBarLeftButton}>
       <Text style={{
               color: 'black',
               fontSize: 20,
               paddingRight:260,
               textAlign:'left'
            }}>Recurrence</Text>
      <Picker  
          //selectedValue={recurrence}
         // onValueChange={(newRecuurence)=>setRecuurence (newRecuurence)}
          
      >
        <Picker.Item label='none' value='none'/>
        <Picker.Item label='javaScript' value='js'/>
      </Picker>
        
          
      
            
       
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
         marginTop:16,
         //marginVertical:100,
         flex:0,
         borderRadius:11,
        }}>
          <TouchableOpacity onPress={''}
          style={styles.navBarLeftButton}>
       <Text style={{
               color: 'black',
               fontSize: 20,
               paddingRight:260,
               textAlign:'left'
            }}>Recurrence</Text>
      <Picker  
          //selectedValue={recurrence}
         // onValueChange={(newRecuurence)=>setRecuurence (newRecuurence)}
          
      >
        <Picker.Item label='none' value='none'/>
        <Picker.Item label='javaScript' value='js'/>
      </Picker>
        
          
      
            
       
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
         marginTop:16,
         //marginVertical:100,
         flex:0,
         borderRadius:11,
        }}>
          <TouchableOpacity onPress={''}
          style={styles.navBarLeftButton}>
       <Text style={{
               color: 'black',
               fontSize: 20,
               paddingRight:260,
               textAlign:'left'
            }}>Recurrence</Text>
      <Picker  
          //selectedValue={recurrence}
         // onValueChange={(newRecuurence)=>setRecuurence (newRecuurence)}
          
      >
        <Picker.Item label='none' value='none'/>
        <Picker.Item label='javaScript' value='js'/>
      </Picker>
        
          
      
            
       
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
         marginTop:16,
         //marginVertical:100,
         flex:0,
         borderRadius:11,
        }}>
          <TouchableOpacity onPress={''}
          style={styles.navBarLeftButton}>
       <Text style={{
               color: 'black',
               fontSize: 20,
               paddingRight:260,
               textAlign:'left'
            }}>Recurrence</Text>
      <Picker  
          
          
      >
        <Picker.Item label='None' value='none'/>
        <Picker.Item label='javaScript' value='js'/>
      </Picker>
        
          
      
            
       
    </TouchableOpacity> 
          </View>

          </KeyboardAvoidingView>
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
     color: '',
     fontSize: 20,
     marginRight:10,
   }
 })