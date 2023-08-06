import { View,Text} from "react-native";
import { theme } from "../theme";
import { Categories } from "../Screens/Categories";
import {useState} from 'react-native'

  const CategoryRow =(name)=>(
    <View
    style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:12,
        borderBottomWidth:1,
        borderBottomColor:theme.colors.border,
        backgroundColor:theme.colors.card,
    }}
    >
        <View
        style={{
            backgroundColor:theme.colors.primary,
            width:12,
            height:12,
            borderRadius:6,
            borderWidth:3,
            borderColor:'white',
            justifyContent:'space-between'
        }}
        />
        
        <Text style={{color:'white', paddingLeft:5}}>{name}</Text>


       

    </View>
)
export default CategoryRow;
