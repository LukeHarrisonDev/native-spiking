import { StyleSheet, View, SafeAreaView, ScrollView, Text, Animated } from 'react-native';
import Header from './app/Components/Header';
import WelcomeScreen from './app/Components/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';     
import NewScreen from './app/Components/NewScreen';
import { useRef, useState } from 'react';

const Stack = createNativeStackNavigator()

export default function App() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    // <View>
      <NavigationContainer>
        <Header />
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: "cornflowerblue"
          }
        }}>
          <Stack.Screen options={{title: "Welcome"}}
          name="WelcomeScreen" component={WelcomeScreen} label="Yo"/>
          <Stack.Screen name="NewScreen" component={NewScreen}/>
        {/* <View style={styles.container}>
          <Header style={styles.header}/>

          <WelcomeScreen />
        </View> */}
        </Stack.Navigator>
      </NavigationContainer>
    // </View>
  
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