import React from 'react';
 import { KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';


 const KeyboeardAvoidingWrapper=({children})=>{
  return(
    <KeyboardAvoidingView>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
 }
 export default KeyboeardAvoidingWrapper