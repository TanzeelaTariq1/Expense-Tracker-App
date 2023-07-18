import React from 'react';
import {ImageBackground, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';

const image = {uri: 'https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-abstract-background-black-background-1179x2556-8710.jpg'};

export const Home = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Welcome To Cash-Tracker</Text>
      <Image style = {{
        height:200,
        width:200,
        marginHorizontal:100,
        //paddingBottom:20,
        borderColor:'black',
        borderLeftWidth:5,
        borderTopWidth:5,
        borderRightWidth:5,
        borderEndWidth:5
    
      }} source={require('E:/Expense-Tracker-App/img/Capture1.jpg')}/>
         <View style ={{
      display:'flex',flexDirection:'row',justifyContent:'center',
      borderRadius: 100, 
      alignItems: 'center',
       width: 300 ,
       height:50,
       backgroundColor:'teal',
       justifyContent:'center',
       marginHorizontal:60,
       //marginVertical:100,
       marginTop:5,
       //marginVertical:100,
       flex:0,
      }}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Login</Text>
        </TouchableOpacity>   
        </View>   
    <View style ={{
      display:'flex',flexDirection:'row',justifyContent:'center',
      borderRadius: 100, 
      alignItems: 'center',
       width: 300 ,
       height:50,
       backgroundColor:'teal',
       justifyContent:'center',
       marginHorizontal:60,
       //marginVertical:100,
       marginTop:10,
       //marginVertical:100,
       flex:0,
      }}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>SignUp</Text>
        </TouchableOpacity>   
        </View>   
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
  },
  image: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop:100
  },
  text: {
    color: 'teal',
    fontSize: 30,
    lineHeight: 84,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingBottom:0,
    fontWeight:'bold',
    marginTop:5,
    paddingTop:5,
    marginVertical:0,
    //marginTop:30,
   
    
  },
});

