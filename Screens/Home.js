import React from 'react';
import {ImageBackground, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';



export const Home = (props) => (
  <View style={styles.container}>
      <Text style={styles.text}>Welcome To Smart-Spend</Text>
      <Image style = {{
        height:200,
        width:200,
        marginTop:10,
        marginHorizontal:100,
        //paddingBottom:20,
        borderColor:'black',
        borderLeftWidth:5,
        borderTopWidth:5,
        borderRightWidth:5,
        borderEndWidth:5
    
      }} source={require('E:/Expense-Tracker-App/img/sk.jpg')}/>
         <View style ={{
      display:'flex',flexDirection:'row',justifyContent:'center',
      borderRadius: 100, 
      alignItems: 'center',
       width: 300 ,
       height:60,
       backgroundColor:'teal',
       justifyContent:'center',
       marginHorizontal:60,
       //marginVertical:100,
       marginTop:30,
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
       height:60,
       backgroundColor:'teal',
       justifyContent:'center',
       marginHorizontal:60,
       //marginVertical:100,
       marginTop:20,
       //marginVertical:100,
       flex:0,
      }}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>SignUp</Text>
        </TouchableOpacity>   
        </View>   
   
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
    
    fontWeight:'bold',
    //marginTop:5,
    paddingTop:5,
    marginTop:60,
    textAlign:'center'
    //marginTop:30,
   
    
  },
});

