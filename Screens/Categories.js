import React, { useState } from 'react';
import { View, Text,} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { AntDesign } from '@expo/vector-icons'; 
export const Categories = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleValueChange =(itemValue, index)=>{
     const newInputs=[...input]
     newInputs[index]=itemValue;
     setSelectedValue(newInputs);
       }
 
   return (
    <>
     <View style={{backgroundColor:'lightblue',height:100}}>
       
       <Picker
         selectedValue={selectedValue}
         onValueChange={handleValueChange}
       >
        
         <Picker.Item label="Categories:Education" value="education" color='black' />
        <Picker.Item label="Categories:Food" value="food" color='black'/>
        <Picker.Item label="Categories:Grocery" value="grocery" color='black' />
        <Picker.Item label="Categories:Shopping" value="shopping" color='black' />
        <Picker.Item label="Categories:Bills" value="bills"  color='black'/>
       </Picker>
       <Text>  
        <AntDesign name="shoppingcart" size={24} color="black" />

        You selected: {selectedValue}</Text>
     </View>
      <View style={{backgroundColor:'lightblue'}}>
       
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
      >
       <Picker.Item label="Categories:Education" value="education" color='black' />
        <Picker.Item label="Categories:Food" value="food" color='black'/>
        <Picker.Item label="Categories:Grocery" value="grocery" color='black' />
        <Picker.Item label="Categories:Shopping" value="shopping" color='black' />
        <Picker.Item label="Categories:Bills" value="bills"  color='black'/>
      </Picker>
      <Text>You selected: {selectedValue}</Text>
    </View>
    <View style={{backgroundColor:'lightblue'}}>
       
     <Picker
       selectedValue={selectedValue}
       onValueChange={handleValueChange}
     >
      <Picker.Item label="Categories:Education" value="education" color='black' />
        <Picker.Item label="Categories:Food" value="food" color='black'/>
        <Picker.Item label="Categories:Grocery" value="grocery" color='black' />
        <Picker.Item label="Categories:Shopping" value="shopping" color='black' />
        <Picker.Item label="Categories:Bills" value="bills"  color='black'/>
     </Picker>
     <Text>You selected: {selectedValue}</Text>
   </View>
   <View style={{backgroundColor:'lightblue'}}>
       
    <Picker
      selectedValue={selectedValue}
      onValueChange={handleValueChange}
    >
      <Picker.Item label="Categories:Education" value="education" color='black' />
        <Picker.Item label="Categories:Food" value="food" color='black'/>
        <Picker.Item label="Categories:Grocery" value="grocery" color='black' />
        <Picker.Item label="Categories:Shopping" value="shopping" color='black' />
        <Picker.Item label="Categories:Bills" value="bills"  color='black'/>
    </Picker>
    <Text>You selected: {selectedValue}</Text>
  </View>
  <View style={{backgroundColor:'lightblue'}}>
       
   <Picker
     selectedValue={selectedValue}
     onValueChange={handleValueChange}
   >
     <Picker.Item label="Categories:Education" value="education" color='black' />
        <Picker.Item label="Categories:Food" value="food" color='black'/>
        <Picker.Item label="Categories:Grocery" value="grocery" color='black' />
        <Picker.Item label="Categories:Shopping" value="shopping" color='black' />
        <Picker.Item label="Categories:Bills" value="bills"  color='black'/>
   </Picker>
   <Text>You selected: {selectedValue}</Text>
 </View>
 </>
   );
 };


