import { KeyboardAvoidingView, Modal } from 'react-native';
import { useState } from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput,ScrollView,input } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Recurrence } from '../types/recurrence';
import DatePicker from 'react-native-modern-datepicker';
import { getToday,getFormatedDate } from 'react-native-modern-datepicker';
import { FontAwesome } from "@expo/vector-icons";
import { Button, SafeAreaView,  } from 'react-native';
 import ListItem from '../components/ListItem';
import DateTimePicker from '@react-native-community/datetimepicker';
 
export const Add = (props,) => {
  const [amount,setAmount]=useState();
   const [datePicker, setDatePicker] = useState(false);
 
   const [date, setDate] = useState(new Date());
  
   const [selectedValue, setSelectedValue] = useState('');
   const handleValueChange =(itemValue, index)=>{
      const newInputs=[...input]
      newInputs[index]=itemValue;
      setSelectedValue(newInputs);
        }
        function showDatePicker() {
         setDatePicker(true);
       };
      
      
      
       function onDateSelected(event, value) {
         setDate(value);
         setDatePicker(false);
       };
    return (
    
      <ScrollView>
      <KeyboardAvoidingView
          behavior='padding'
          keyboardVerticalOffset={111}
          style={{
           flex:0,
          
          }}
      >
       
    
      
      <View style={styles.MainContainer}>
 
      
       
 {datePicker && (
   <DateTimePicker
     value={date}
     mode={'date'}
     display={Platform.OS === 'ios' ? 'spinner' : 'default'}
     is24Hour={true}
     onChange={onDateSelected}
     style={styles.datePicker}
   />
 )}

 

 {!datePicker && (
   <View style={{ margin: 10 }}>
     <Button title="Date " color="teal" onPress={showDatePicker}  />
   </View>
 )}
  <Text style={styles.text}> {date.toDateString()}</Text>



</View>
<View style ={{
   flexDirection:'row',justifyContent:'center',
    //borderRadius: 100, 
    alignItems: 'center',
     width: 400 ,
     height:50,
     backgroundColor:'lightblue',
     justifyContent:'center',
    
     //marginVertical:100,
     
     //marginVertical:100,
     flex:0,
     
    }}>
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
      </View>
      <View style ={{
   flexDirection:'row',justifyContent:'center',
    //borderRadius: 100, 
    alignItems: 'center',
     width: 400 ,
     height:50,
     backgroundColor:'lightblue',
     justifyContent:'center',
    
     //marginVertical:100,
    
     //marginVertical:100,
     
    }}>
      <TouchableOpacity onPress={''}
      style={styles.navBarLeftButton}>
   <Text style={{
           color: 'black',
           fontSize: 20,
           paddingRight:290,
           textAlign:'left'
        }}>Note</Text>
  <TextInput style ={{
     borderRadius:8,
     backgroundColor:'lightblue',
     textAlign:'right',
     //flex:0.75,
     paddingRight:8,
     color:'purple'
     
     
  }} placeholder='Note'
 
     placeholderTextColor='purple'
     
  />
    
      
  
        
   
</TouchableOpacity> 
      </View>
      <View style={{backgroundColor:'lightblue',width:400,height:50,}}>
     
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
        style={{textAlign:'left',}}
      >
        <Picker.Item label="Recurrence:None" value="none" />
        <Picker.Item label="Recurrence:Daily" value="daily" />
        <Picker.Item label="Recurrence:Weekly" value="weekly" />
        <Picker.Item label="Recurrence:Monthly" value="monthly" />
        <Picker.Item label="Recurrence:Yearly" value="yearly" />
      </Picker>
      </View>
      <View style={{backgroundColor:'lightblue',width:400,height:50,}}>
      
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
        backgroundColor='purple'
        style={{textAlign:'left'}}
      >
        <Picker.Item label="Categories:Education" value="education" color='black' />
        <Picker.Item label="Categories:Food" value="food" color='black'/>
        <Picker.Item label="Categories:Grocery" value="grocery" color='black' />
        <Picker.Item label="Categories:Shopping" value="shopping" color='black' />
        <Picker.Item label="Categories:Bills" value="bills"  color='black'/>
      </Picker>
      </View>
      <View style ={{
   flexDirection:'row',justifyContent:'center',
    //borderRadius: 100, 
    alignItems: 'center',
     width: 200 ,
     height:40,
     backgroundColor:'teal',
     justifyContent:'center',
     marginHorizontal:100,
     //marginVertical:100,
     margin:16,
     //marginVertical:100,
     flex:0,
     borderRadius:11,
    }}>
      <TouchableOpacity onPress={''}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        
      }}  mode='contained'>
   <Text style={{
           color: 'white',
           fontSize: 20,
           //paddingRight:230,
           textAlign:'center',
           justifyContent:'center'
        }} onPress={()=>props.navigation.navigate("Expenses",)}>Submit Expenses</Text>
  
</TouchableOpacity> 
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
   
    

);
} 
const styles= StyleSheet.create({
   MainContainer: {
      flex: 1,
      //padding: 6,
      alignItems: 'center',
      backgroundColor: 'lightblue',
      flexDirection:'row',
      
    },
   
    text: {
      fontSize: 15,
      color: 'purple',
     marginLeft:200,
      //marginBottom: 10,
      //marginHorizontal:140,
      //textAlign: 'right'
    },
   
    // Style for iOS ONLY...
    datePicker: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 320,
      height: 260,
      display: 'flex',
      
    },
navBarLeftButton: {
 flex: 1,
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center',
 width: 100,
 paddingLeft: 8

},
buttonText: {
 color: '',
 fontSize: 20,
 marginRight:10,
},
centeredView:{
flex:1,
marginTop:22,

alignItems:'center',
justifyContent:'center',
},
modalView:{
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
}
})

