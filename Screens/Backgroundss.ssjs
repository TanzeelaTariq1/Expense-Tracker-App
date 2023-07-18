import React from 'react';
import{View,ImageBackground} from 'react-native';

const Backgroundss =({children})=>{
    return(
        <>
        <View>
         <ImageBackground source={require("./img/background.png")} style={{height:'100'}}/>
        </View>
        <View style={{position:"absolute"}}>
            {children}
        </View>
        </>
    );
}

const styles=StyleSheet.create({})

export default Backgroundss;