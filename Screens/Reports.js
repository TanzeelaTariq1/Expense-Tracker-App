import { Text, View,Button,TouchableOpacity,TextInput,StyleSheet } from 'react-native';
import { useState } from 'react';
export const Reports = (props,{paramKey}) => {
  const [amount,setAmount]=useState();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter amount</Text>
        <TouchableOpacity onPress={''}
      style={styles.navBarLeftButton}>
   <Text style={{
           color: 'black',
           fontSize: 18,
           paddingRight:260,
           textAlign:'left'
        }}>Amount</Text>
  <TextInput style ={{
     borderRadius:8,
     backgroundColor:'lightblue',
     textAlign:'right',
     //flex:0.75,
     paddingRight:10,
     color:'purple'
     
  }} placeholder='Amount'
     placeholderTextColor='purple'
     value={amount}
     onChangeText={(amount)=>setAmount(amount)}
     
  />   
</TouchableOpacity> 
        <Button 
            title='Go To Next'
            mode="contained"
            onPress={()=>props.navigation.navigate("Expenses",{paramKey:amount})}
        />
      </View>
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
 
 })