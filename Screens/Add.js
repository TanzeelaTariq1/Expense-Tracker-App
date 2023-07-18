import { KeyboardAvoidingView } from 'react-native';
import { Text, View } from 'react-native';
export const Add = () => {
    return (
     <KeyboardAvoidingView
       behavior = 'padding'
       KeyboardVerticalOffset = {112}
       style = {{margin:146, flex:1}}
       >
        <View
           style={{
            margin:16,
            borderRadius:11,
            overflow:'hidden',
           }}
        >
          
        </View>
     </KeyboardAvoidingView>
    );
  } 