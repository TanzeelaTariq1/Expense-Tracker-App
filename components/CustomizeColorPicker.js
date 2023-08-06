import {
    View,
    TouchableOpacity,
    ImageBackground as ImageBackView,
    Text,
    StyleSheet,
  } from "react-native";
  
  import { useState } from "react";
  import {ColorPicker ,fromHsv } from 'react-native-color-picker';
  
  const CustomizeColorPicker = () => {
    const [value, setValue] = useState("#ffff");
  
      const _handleCallBackModal = () =>{
          _handleModal();
      }
  
  
      return (
              <View style={styles.container}>
                <ColorPicker
                      onColorSelected={(color) => {
                        setValue(fromHsv(color));
                        setSelectedColor(fromHsv(color));
                    }}
                    style={styles.colorBoxStyle}
                  />
                    <TouchableOpacity
                      onPress={_handleCallBackModal}
                      style={[{backgroundColor: value},styles.closebutton]}
                    >
                        <Text style={{color:{}}}>Close</Text> 
                    </TouchableOpacity>
                  </View>
      );
  }
  
  export default CustomizeColorPicker;
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    colorBoxStyle:{
      display:"flex",
      flex:1,
      alignContent:"center",
      justifyContent:"center",
      marginBottom:150,
      paddingHorizontal:40,
      paddingVertical:40,
    },
    closebutton:{
      position: 'absolute',
      bottom: 20,
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
  })