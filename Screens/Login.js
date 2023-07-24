import React from 'react';
import{View,StyleSheet, ImageBackground,Text,TextInput,TouchableOpacity} from 'react-native';


const Login=(props)=>{
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
                }}>Welcome Back</Text>
                <Text style={{
                    fontSize:15,
                    color:'grey',
                    fontWeight:'bold',
                    marginBottom:20,
                    paddingLeft:35,
                    paddingRight:55,
                }}>Login to your account</Text>
               <TextInput style = {{
            borderRadius:100,
            color:'teal',
            paddingHorizontal:10,
            marginTop:10,
            marginRight:45,
            height:50,
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
            marginTop:10,
            marginRight:45,
            height:50,
            width:300,
            marginVertical:10,
            backgroundColor:'whitesmoke'
            }}
            placeholderTextColor='teal'
            placeholder="Password"
           secureTextEntry={true}
            /> 
            <View style={{alignItems:'flex-end',width:'80%',paddingRight:70}}>
                <Text style = {{color:'teal',fontWeight:'bold',fontSize:16}}>Forget Password?</Text>
                </View> 
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
      <Text onPress={()=>props.navigation.navigate("three")} style={{ color:'white', fontSize: 20,fontWeight:'bold'  }}>Login</Text>
    </TouchableOpacity>
    <View style ={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <Text style ={{fontsize:16,fontWeight:'bold'}}>Don't have an account ?</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")}>
        <Text style={{color:'teal',fontWeight:'bold',fontSize:16}}>Signup</Text>
        </TouchableOpacity>
        
        </View>   
          </View>
        
    )
}
export default Login;