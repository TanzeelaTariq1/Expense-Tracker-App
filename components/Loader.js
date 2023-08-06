import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet,} from 'react-native';

const Loader = () => {
    
    return   <View
       style={[style.container]}
    >
       <View style={style.loader}>
          <ActivityIndicator size="large" color="teal"/>
          <Text style={{marginRight:10,fontSize:16}}>Loading...</Text>
       </View>
    </View>

};

const style= StyleSheet.create({
    container:{
        position:'relative',
        zIndex:10,
        backgroundColor:'teal',
        justifyContent:'center',
        height:70,
        width:200
    },
    loader:{
        height:70,
        backgroundColor:'white',
        marginHorizental:50,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
    }
})


export default Loader;