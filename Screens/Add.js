import { KeyboardAvoidingView, Modal } from 'react-native';
import { useState } from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Recurrence } from '../types/recurrence';
import DatePicker from 'react-native-modern-datepicker';
import { getToday,getFormatedDate } from 'react-native-modern-datepicker';
import { FontAwesome } from "@expo/vector-icons";


export const Add = (props) => {
 
    return (
    
      <ScrollView>
      <KeyboardAvoidingView
          behavior='padding'
          keyboardVerticalOffset={111}
          style={{
           flex:0,
          
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
     backgroundColor:'lightblue',
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
           paddingRight:230,
           textAlign:'left'
        }}>Recurrence</Text>
  <TextInput style ={{
     borderRadius:8,
     backgroundColor:'lightblue',
     textAlign:'right',
     //flex:0.75,
     paddingRight:8,
     color:'#252c6a'
  }} placeholder='None'
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
           paddingRight:230,
           textAlign:'left'
        }}>Date</Text>
  <TextInput style ={{
     borderRadius:8,
     backgroundColor:'lightblue',
     textAlign:'right',
     //flex:0.75,
     paddingRight:8,
     color:'teal'
     
  }} placeholder='YYYY/MM/DD'
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
        }}>Note</Text>
  <TextInput style ={{
     borderRadius:8,
     backgroundColor:'lightblue',
     textAlign:'right',
     //flex:0.75,
     paddingRight:8,
     
     
  }} placeholder='Note'
  placeholdersize={30}
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
           paddingRight:230,
           textAlign:'left'
        }}>Category</Text>
  <TextInput style ={{
     borderRadius:8,
     backgroundColor:'lightblue',
     textAlign:'right',
     //flex:0.75,
     paddingRight:8,
     color:'#fa364a'
     
  }} placeholder='Category'
     placeholderTextColor='white'
     
  />
    
      
  
        
   
</TouchableOpacity> 
      </View>
      <View style ={{
   flexDirection:'row',justifyContent:'center',
    //borderRadius: 100, 
    alignItems: 'center',
     width: 200 ,
     height:40,
     backgroundColor:'teal',
     justifyContent:'center',
     marginHorizontal:100,
     //marginVertical:100,
     margin:16,
     //marginVertical:100,
     flex:0,
     borderRadius:11,
    }}>
      <TouchableOpacity onPress={''}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        
      }}>
   <Text style={{
           color: 'white',
           fontSize: 20,
           //paddingRight:230,
           textAlign:'center',
           justifyContent:'center'
        }} onPress={()=>props.navigation.navigate("Expenses")}>Submit Expenses</Text>
  
</TouchableOpacity> 
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
   
    

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
},
centeredView:{
flex:1,
marginTop:22,

alignItems:'center',
justifyContent:'center',
},
modalView:{
margin:100,
backgroundColor:'teal',
borderRadius:20,
width :'90%',
padding:35,
alignItems:'center',
shadowColor:'#000',
shadowOffset:{
  width:0,
  height:2,
},
shadowOpacity:0.25,
shadowRadius:4,
elevation:5,
}
})