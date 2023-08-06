import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
const Button =({
    title,
    onPress =()=>{}
})=>{
    return <TouchableOpacity 
    activeOpacity={0.7}
    onPress={onPress}
     style={{
        height:45,
        width:'100%',
        paddingHorizontal:100,
        backgroundColor:'teal',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
     }}>
        <Text style={{
            color:'white',
            fontWeight:'bold',
            fontSize:18
        }}>{title}</Text>

     </TouchableOpacity>
}
export default Button;