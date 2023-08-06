import React from 'react'
import{View,StyleSheet,ScrollView,SafeAreaView,Keyboard,ActivityIndicator, ImageBackground,Text,TextInput,useWindowDimensions,TouchableOpacity,split,Alert} from 'react-native';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
//import Loader from '../components/Loader';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp=(props)=>{
  
  const [inputs,setInputs]=useState({
      email:'',
      fullname:'',
      phone:'',
      password:'',
      });
  const [errors,setErrors]=useState({});
 
      const validate=()=>{
          Keyboard.dismiss();
           let valid=true;
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
           
            if (!inputs.fullname) {
              handleError('Name cannot be empty.','fullname');
              valid=false;
            } else if (inputs.fullname.length < 2 || inputs.fullname.length > 50) {
              handleError('Name should be between 2 and 50 characters.','fullname');
              valid=false;
            } else {
              // Condition 3: Alphabetic Characters Only
              const regex = /[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+[a-z]/;
              if (!inputs.fullname.match(/[A-Z]+[a-zA-Z ]/)) {
                  handleError('Name should contain alphabetic characters only.','fullname');
                  valid=false;
              } else {
                // Condition 4: No Numbers or Symbols
               if (inputs.fullname.match(/^[A-Z]+[a-zA-Z ]*$/)){
                  handleError('');
                }

              }
              
            }

          if(!inputs.phone){
              handleError('Please input phone number','phone');
              valid=false;
          }else if (inputs.phone.length<11){
              handleError('Minimum phone number length should be 11','phone');
              valid=false;
          }
          const hasUppercase = /[A-Z]/;
          const hasLowercase = /[a-z]/;
          const hasNumber = /\d/;
          const hasSpecialCharacter = /[@$!%?&]/;
          //const isLengthValid =  8;
          if(!inputs.password){
              handleError('Please input password','password');
              valid=false;
          } else if (!inputs.password.match(hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter)) {
              handleError('Password should include numbers, symbols, and both uppercase and lowercase letters.','password');
              valid=false
            }else if (inputs.password.length<8){
              handleError('Minimum password length should be 8','password');
              valid=false
          } 
          else if (inputs.password.match(hasUppercase && hasLowercase && (hasNumber && hasSpecialCharacter)))
          {
             handleError('');
          }  
          if(valid) 
          {
            Signup();
          }  
        };
        const Signup= async ()=>{
          try {
            const jsonValue = JSON.stringify(inputs);
            await AsyncStorage.setItem('user', jsonValue);
            props.navigation.navigate("Login")
        } catch (error) {
          Alert.alert('Error','Something went wrong')
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
               Welcome
             </Text>
             <Text style={{color:'grey',fontSize:15,marginVertical:2,justifyContent:'center',textAlign:'center'}}>
               Create an account
             </Text>
             <View style={{marginVertical:20}}>
             <ListItem iconName="account-outline"
                 placeholder='Enter your name'
                 placeholderTextColor='teal'
                  label='Full Name'
                  error={errors.fullname}
                  onFocus={()=>{
                      handleError(null,'fullname');
                  }}
                  onChangeText={text=> handleOnChange(text, 'fullname')}
                  />
             <ListItem iconName="email-outline"
                 placeholder='Enter your email address'
                 placeholderTextColor='teal'
                  label='Email Address'
                  error={errors.email}
                  onFocus={()=>{
                      handleError(null,'email');
                  }}
                  onChangeText={text=> handleOnChange(text, 'email')}
                  />
                 
                  <ListItem iconName="phone-outline"
                 placeholder='Enter your phone number'
                 placeholderTextColor='teal'
                  label='Phone Number'
                  keyboardType="numeric"
                  error={errors.phone}
                  onFocus={()=>{
                      handleError(null,'phone');
                  }}
                  onChangeText={text=> handleOnChange(text, 'phone')}
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
                   <ListItem iconName="lock-outline"
                 placeholder='* * * * * * * *'
                 placeholderTextColor='teal'
                  label='Confirm Password'
                  
                  error={errors.password}
                  onFocus={()=>{
                      handleError(null,'password');
                  }}
                  onChangeText={text=> handleOnChange(text, 'password')}
                  password
                  />
                  <Button title="SignUp"onPress={validate}/>
                  <View style ={{display:'flex',flexDirection:'row',justifyContent:'center',marginVertical:10}}>
                        <Text style ={{fontsize:16,fontWeight:'bold',}}>Already have account ?</Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
                          <Text style={{color:'teal',fontWeight:'bold',fontSize:16,}}>Login</Text>
                      </TouchableOpacity>
      </View>  
             </View>

         </ScrollView>
      </SafeAreaView>  
  
        
      
  )
}

export default SignUp;



