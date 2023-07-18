import React from 'react';
import{View,StyleSheet, ImageBackground,Text,TextInput,TouchableOpacity} from 'react-native';

const image = {uri: 'https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-abstract-background-black-background-1179x2556-8710.jpg'};
const SignUp=(props)=>{
    return(
        
          <View style={{
            backgroundColor:'white',
            height:700,
            width:460,
            paddingTop:50,
            
            alignItems:'center'
            }}>
                <Text style={{
                    fontSize:40,
                    color:'teal',
                    fontWeight:'bold',
                    marginTop:5,
                    paddingLeft:35,
            paddingRight:55,
                }}>Welcome</Text>
                <Text style={{
                    fontSize:15,
                    color:'grey',
                    fontWeight:'bold',
                    marginBottom:20,
                    paddingLeft:35,
                    paddingRight:55,
                }}>Create an account</Text>
               <TextInput style = {{
            borderRadius:100,
            color:'teal',
            paddingHorizontal:10,
            marginTop:5,
            marginRight:45,
            height:30,
            width:300,
            marginVertical:10,
            backgroundColor:'whitesmoke'
            }}
            placeholderTextColor='teal'
            placeholder="First Name"
           
            />  
             <TextInput style = {{
            borderRadius:100,
            color:'teal',
            paddingHorizontal:10,
            marginTop:5,
            marginRight:45,
            height:30,
            width:300,
            marginVertical:10,
            backgroundColor:'whitesmoke'
            }}
            placeholderTextColor='teal'
            placeholder="Last Name"
           
            /> 
             <TextInput style = {{
            borderRadius:100,
            color:'teal',
            paddingHorizontal:10,
            marginTop:5,
            marginRight:45,
            height:30,
            width:300,
            marginVertical:10,
            backgroundColor:'whitesmoke'
            }}
            placeholderTextColor='teal'
            placeholder="Email / Username"
            keyboardType={"email-address"}
            />  
             <TextInput style = {{
            borderRadius:100,
            color:'teal',
            paddingHorizontal:10,
            marginTop:5,
            marginRight:45,
            height:30,
            width:300,
            marginVertical:10,
            backgroundColor:'whitesmoke'
            }}
            placeholderTextColor='teal'
            placeholder="Contact Number"
            keyboardType={"number"}
            />       
        <TextInput style = {{
            borderRadius:100,
            color:'teal',
            paddingHorizontal:10,
            marginTop:5,
            marginRight:45,
            height:30,
            width:300,
            marginVertical:10,
            backgroundColor:'whitesmoke'
            }}
            placeholderTextColor='teal'
            placeholder="Password"
           secureTextEntry={true}
            /> 
            <TextInput style = {{
            borderRadius:100,
            color:'teal',
            paddingHorizontal:10,
            marginTop:5,
            marginRight:45,
            height:30,
            width:300,
            marginVertical:10,
            backgroundColor:'whitesmoke'
            }}
            placeholderTextColor='teal'
            placeholder="Confirm Password"
           secureTextEntry={true}
            /> 
            
                <TouchableOpacity style={{ 
        borderRadius: 100, 
        alignItems: 'center',
         width: 300 ,
         height:50,
         backgroundColor:'teal',
         justifyContent:'center',
         marginHorizontal:10,
         //marginVertical:100,
         marginTop:10,
         //marginVertical:100,
        marginRight:50,
         flex:0,
          }}>
      <Text style={{ color:'white', fontSize: 20,fontWeight:'bold'  }}>Signup</Text>
    </TouchableOpacity> 
    
          </View>
        
    )
}
export default SignUp;