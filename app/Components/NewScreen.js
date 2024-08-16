import { StyleSheet, Text, View } from "react-native";

export default function NewScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello</Text>
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