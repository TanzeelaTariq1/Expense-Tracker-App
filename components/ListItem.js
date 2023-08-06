import React, { useMemo,useState } from 'react';
import { Text, TouchableOpacity,View,StyleSheet,TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const ListItem = ({
 label,
 iconName,
 error,
 password,
 onFocus=()=>{},
 ...props
 
}) => {
   const [isFocused,setIsFocused] = useState(false);
   const [hidePassword,setHidePassword]=useState(password);
   return <View style={{marginBottom:20,}}>
    <Text style={style.label}>{label}</Text>
    <View style={[style.inputContainer,
    {
      borderColor:error
      ?color='red'
      :isFocused
      ?color='teal'
      :color='whitesmoke',
      
      },]}>
      <MaterialCommunityIcons name={iconName}
        style={{
          fontSize:22,
          color:'teal',
          marginRight:10,
        }}
      />
      <TextInput 
      secureTextEntry={hidePassword}
      autoCorrect={false}
      onFocus={()=>{
        onFocus();
        setIsFocused(true);
      }}
      onBlur={()=>{
        setIsFocused(false);
      }}
      style={{color:'teal',flex:1}}
      {...props}/>
      {password && (
        <MaterialCommunityIcons name = {hidePassword?"eye-outline":"eye-off-outline"}
        onPress={()=>setHidePassword(!hidePassword)}
       style={{
          fontSize:22,
          color:'teal',
          marginRight:10,
        }}
      />
      )}
      
    </View>
    {error && (
      <Text style={{color:'red',fontSize:12, marginTop:7}}>
      {error}</Text>
    )}
    
   </View>
};
const style=StyleSheet.create({
  label:{
    marginVertical:5,
    fontSize:14,
    color:'teal'
  },
  inputContainer:{
    height:45,
    backgroundColor:'whitesmoke',
    flexDirection:'row',
   paddingHorizontal:15,
    borderWidth:1,
    alignItems:'center',
   
   
  }
})

export default ListItem;