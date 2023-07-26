import { Text, View,StyleSheet,Button,TextInput, KeyboardAvoidingView,ScrollView,TouchableOpacity,Modal } from 'react-native';

import { theme } from '../theme';
import { FontAwesome } from "@expo/vector-icons";
import { useState, } from 'react';
import CategoryRow from '../components/CategoryRow';
import { ColorPicker ,fromHsv} from 'react-native-color-picker'



 export const Categories = () => {
  const[showColorPicker,SetShowColorPicker]=useState();
  const [selectedColor,setSelectedColor] = useState('#8AA9F9');
  const [newName,setNewName]=useState('');
  const[categories,setCategories]= useState([{
   
    
  },{

  },]);
  const onSelectColor = ({hex})=>{
    setSelectedColor(hex);
  }
  const createCategory=()=>{
    setCategories([...categories,{
      id:Math.random().toString(),
      color:selectedColor,
      name: newName,
    }])
    setNewName(newName);
    setSelectedColor(theme.colors.card);
  }


    return (
   <>
      <KeyboardAvoidingView
       behavior='padding'
       keyboardVerticalOffset={30}
        style={{margin:16,flex:1}}>
          
          <View style={{flex:1}}>
          {categories.map(()=>(
            <CategoryRow/>
          ))}
      <View style ={{
        flexDirection:'row',
          //paddingVertical:8,
          display:'flex',
          alignItems:'center',
          //marginVertical:300
        
          
          
         }}>
         
          <TouchableOpacity onPress={()=>SetShowColorPicker(!showColorPicker)}>
            <View style ={{ 
              backgroundColor:selectedColor,
              width:32,
              height:32,
              borderRadius:16,
              borderWidth:3,
              borderColor:theme.colors.border,
              
              }}/>
            </TouchableOpacity> 
          <TextInput 
               placeholder='  Category name'
              onChange={(event)=> setNewName(event.nativeEvent.text)}
              value={newName}
               
               style={{
                color:'black',
                borderRadius:8,
                borderColor:theme.colors.border,
                borderWidth:2,
                flex:1,
                //height:40,
                //paddingLeft:100,
                marginLeft:8,
              
                
                
               }}
          />
          <TouchableOpacity onPress={createCategory} style={{
            padding:12,
            //backgroundColor:'teal'
          }}>
            <FontAwesome name ='send' size={24} color='teal'/>
          </TouchableOpacity>
           </View>
           </View>
           </KeyboardAvoidingView>
           <Modal visible={showColorPicker} animationType='fade'>
            <ColorPicker
            hideSliders
                oldColor='purple'
                color={selectedColor}
                onColorChange={({h,s,v}) => onSelectColor({hex:fromHsv(h,s,v)})} 
                onColorSelected={color => alert(`Color selected: ${color}`)}
                onOldColorSelected={color => alert(`Old color selected: ${color}`)}
                style={{flex: 1}}
            />
            <Button onPress={()=>SetShowColorPicker(false)} title='Done'/>
           </Modal>
          
           </>
           
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
    buttonText: {
      color: 'black',
      fontSize: 20,
      marginRight:255,
    }
  })
   