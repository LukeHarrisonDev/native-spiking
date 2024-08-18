import { StatusBar } from "expo-status-bar";
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation()

    const handlePess = () => {
        console.log("Pressed")
      }
    return (
                <ScrollView style={styles.container} contentContainerStyle={{      justifyContent: 'center',
                  alignItems: 'center',}}>
            <Text style={styles.text} onPress={handlePess} >Welcome to my App!!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur ipsum ac ligula aliquam placerat sed ac lectus. Aenean quis facilisis ipsum, et venenatis diam. Praesent eget dolor neque. Donec sed ipsum volutpat, sodales ligula at, hendrerit diam. Phasellus neque velit, facilisis eget aliquam sed, rutrum id mi. Nam feugiat nisi sit amet molestie pellentesque. Etiam gravida euismod augue ac porttitor.

Fusce quis consequat lectus, non imperdiet sapien. Donec feugiat viverra pretium. Aliquam lobortis malesuada augue sed ultricies. Sed non auctor mauris. Vestibulum vestibulum ipsum a nisi tempus varius. Aliquam vehicula lacus lectus, nec euismod risus rutrum eu. Sed id metus leo. Pellentesque nulla enim, varius iaculis venenatis non, lacinia sed nunc. Nulla sit amet urna vel mi dignissim tempus quis sed justo. Vestibulum eget nulla mauris. Pellentesque placerat lacus odio, vel interdum dolor tempus ac.

Vestibulum ullamcorper erat a faucibus elementum. Sed vitae suscipit arcu. Maecenas finibus tortor in dolor pulvinar aliquam. Phasellus iaculis orci et sem posuere, eget mollis urna pharetra. Cras dapibus ex lectus, id mattis nisi laoreet vel. In diam sapien, semper ac consequat egestas, consectetur eu massa. Cras consectetur justo vitae ligula efficitur, eget consectetur dolor tempor. In porta diam ut iaculis bibendum.

Aenean consectetur mauris at elit vulputate, non elementum lectus porta. Pellentesque accumsan libero vitae lectus porta, a sagittis elit auctor. Pellentesque feugiat, erat a aliquet porta, orci enim ornare nisl, ut consectetur ipsum urna nec tellus. Pellentesque condimentum nisl ac mattis commodo. Phasellus lectus turpis, venenatis nec enim nec, finibus euismod libero. Sed tincidunt nec ligula vel fringilla. Fusce orci leo, ultrices et velit sit amet, ornare posuere nibh. Cras posuere porta nisi ac suscipit. Mauris id tellus vel libero aliquet varius id vel urna. In laoreet orci nibh, non dignissim nisl ullamcorper sed. Maecenas ultricies risus vitae eros pulvinar porttitor. Suspendisse dapibus leo et felis ullamcorper, eu pellentesque est accumsan. Etiam accumsan tellus dolor, sit amet imperdiet neque convallis vitae. Sed eu laoreet ex. Quisque erat sem, fermentum vitae elementum quis, ullamcorper id odio. Nunc quis viverra ligula.

In id mauris nec mi porta suscipit et a urna. Nulla vulputate diam et sem blandit efficitur. Morbi molestie eget augue nec vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis, augue et molestie auctor, felis felis suscipit libero, in rutrum massa velit eget erat. Sed eu nulla hendrerit, fermentum eros quis, malesuada lectus. Nam bibendum felis at leo scelerisque, quis tristique massa sagittis. Nulla accumsan vel ipsum ut varius. Quisque laoreet interdum nibh, vel scelerisque magna dignissim id. Duis lacus nulla, porta et elementum vel, tempus id dolor. Donec viverra aliquam mattis. Vivamus ipsum tellus, volutpat et elementum blandit, lacinia vel elit. Etiam bibendum ullamcorper lacinia. Cras scelerisque vel odio a sollicitudin. Maecenas massa quam, ultricies id purus efficitur, ultricies condimentum nisl. Nunc commodo viverra magna nec efficitur.</Text>
            <StatusBar style="auto" /> 
            <TouchableWithoutFeedback onPress={() => {
                console.log("image")
            }}>
                <Image
                style={styles.bass}
                blurRadius={2}
                // fadeDuration={30000}
                source={require("../assets/bass.png") }/>
                </TouchableWithoutFeedback>
                <Button onPress={() => {alert("Nice One, you can tap a button")}}color="orange" title="Click Me"/>
                <Button onPress={() => navigation.navigate("NewScreen")} title="Next Page"/>




        </ScrollView>

    )
}

const styles = StyleSheet.create({
    text: {
      // marginTop: 70,
      fontSize: 30,
      // position: "absolute",
      top: 50
    },
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    bass: { height: 275, width: 275
    },
  });