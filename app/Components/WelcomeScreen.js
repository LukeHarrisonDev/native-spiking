import { StatusBar } from "expo-status-bar";
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation()

    const handlePess = () => {
        console.log("Pressed")
      }
    return (

                <View style={styles.container}>
            <Text style={styles.text} onPress={handlePess} numberOfLines={2}>Welcome to my App!!</Text>
            <StatusBar style="auto" /> 
            <TouchableWithoutFeedback onPress={() => {
                console.log("image")
            }}>
                <Image
                style={styles.bass}
                blurRadius={1}
                // fadeDuration={30000}
                source={require("../assets/bass.png") }/>
                </TouchableWithoutFeedback>
                <Button onPress={() => {alert("Nice One, you can tap a button")}}color="orange" title="Click Me"/>
                <Button onPress={() => navigation.navigate("NewScreen")} title="Next Page"/>
        </View>

    )
}

const styles = StyleSheet.create({
    text: {
      marginTop: 70,
      fontSize: 30,
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