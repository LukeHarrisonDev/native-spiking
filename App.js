import { StyleSheet, View } from 'react-native';
import Header from './app/Components/Header';
import WelcomeScreen from './app/Components/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from './app/Components/NewScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="NewScreen" component={NewScreen}/>
      {/* <View style={styles.container}>
        <Header style={styles.header}/>

        <WelcomeScreen />
      </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}


const styles = StyleSheet.create({
  text: {
    marginTop: 70,
    fontSize: 30,
    position: "absolute",
    top: 50
  },
  header: {
    position: "absolute",
    top: 50
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bass: { height: 275, width: 275
  },
});