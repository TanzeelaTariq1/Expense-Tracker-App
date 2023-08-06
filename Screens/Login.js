import React from 'react'
import{View,StyleSheet,ScrollView,SafeAreaView,Keyboard, ImageBackground,Text,TextInput,TouchableOpacity,split,Alert,TouchableHighlight} from 'react-native';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons'; 
import KeyboeardAvoidingWrapper from '../components/KeyboardAvoidingwrapper';
import axios from "axios";
const Login=(props)=>{
    const [inputs,setInputs]=useState({
        email:'',
        password:'',
        });
    const [errors,setErrors]=useState({});
   
        const validate=()=>{
            Keyboard.dismiss();
            let valid =true;
            if (!inputs.email) {
               handleError('Please enter an email address.','email');
               valid=false;
              } else if (inputs.email.charAt(0) !==inputs. email.charAt(0).toLowerCase()) {
                handleError('The first letter of the email should be in lowercase.','email');
                valid=false;
              }else if (!inputs.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
                handleError('Please input a valid email address.','email');
                valid=false;
              } 
             
            if(!inputs.password){
                handleError('Please input password','password');
                valid=false;
            }  
            if (valid)  
            {
              login();
            } 
          };
          const login=async ()=>{
              let userData =await AsyncStorage.getItem('user');
              if(userData){
                userData=JSON.parse(userData);
                if(inputs.email==userData.email && inputs.password==userData.password){
                  AsyncStorage.setItem("user",JSON.stringify({...userData,loggedIn:true}),
                  props.navigation.navigate("Main")
                  )
                }else if(inputs.email!=userData.email && inputs.password!=userData.password){
                  Alert.alert('Error','User does not exist');
                 } else{
                   Alert.alert('Error','Invalid Details');
                }
             }else{
              Alert.alert('Error','User does not exist');
           }
           
          };
    
    
    const handleOnChange=(text,input)=>{
        setInputs((prevState)=>({...prevState,[input]:text}))
    };

    const handleError=(errorMessage,input)=>{
        setErrors((prevState)=>({...prevState,[input]:errorMessage}))
    };
    return(
      
        <SafeAreaView style={{backgroundColor:'white',flex:1}}>
              
           <ScrollView 
               contentContainerStyle={{
                paddingTop:50,
                paddingHorizontal:20,
               }}
           >
         
               <Text style={{color:'teal',fontSize:40,fontWeight:'bold',textAlign:'center'}}>
                 Welcome Back
               </Text>
               <Text style={{color:'grey',fontSize:15,marginVertical:2,justifyContent:'center',textAlign:'center'}}>
                 Login to your account
               </Text>
               <View style={{marginVertical:20}}>
               <ListItem iconName="email-outline"
                   placeholder='abcd@gmail.com'
                   placeholderTextColor='teal'
                    label='Email'
                    error={errors.email}
                    onFocus={()=>{
                        handleError(null,'email');
                    }}
                    onChangeText={text=> handleOnChange(text, 'email')}
                    />
                     <ListItem iconName="lock-outline"
                   placeholder='* * * * * * * *'
                   placeholderTextColor='teal'
                    label='Password'
                    error={errors.password}
                    onFocus={()=>{
                        handleError(null,'password');
                    }}
                    onChangeText={text=> handleOnChange(text, 'password')}
                    password
                    />
                    <Button title="Login" onPress={validate}/>
                    <View style={{borderWidth: 0.5,
                                 borderColor:'black',
                                        margin:10,}}>
                    </View>
                    
                    <View style ={{display:'flex',flexDirection:'row',justifyContent:'center',marginVertical:10}}>
                          <Text style ={{fontsize:16,fontWeight:'bold',}}>Do not have account ?</Text>
                          <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")}>
                            <Text style={{color:'teal',fontWeight:'bold',fontSize:16,}}>SignUp</Text>
                        </TouchableOpacity>
        </View>  
               </View>
             
           </ScrollView>
        </SafeAreaView>  
       
          
        
    )
}
const styles = StyleSheet.create({
  btnClickContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //alignSelf: 'stretch',
    backgroundColor: 'teal',
    borderRadius: 11,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    height:50,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  btnIcon: {
    height: 25,
    width: 25,
    marginTop:5,
  },
  btnText: {
    fontSize: 18,
    color: '#FAFAFA',
    marginLeft: 10,
    marginTop: 5,
  }
});
export default Login;

