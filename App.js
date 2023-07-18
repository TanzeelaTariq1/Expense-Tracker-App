import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet ,View} from 'react-native';
import { Home } from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/Signup';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}
            options={{
              headerTitleAlign: 'center',
             navigationBarColor:'teal'
            }}
            />
            <Stack.Screen name="Login" component={Login}
            options={{
              headerTitleAlign: 'center', 
            }}
            />  
             <Stack.Screen name="SignUp" component={SignUp}
            options={{
              headerTitleAlign: 'center', 
            }}
            />
           
          </Stack.Navigator>

        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
 
});