import { StyleSheet, Text, View, Animated } from "react-native";

export default function Header({animHeaderValue}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Busk-A-Move!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      marginTop: 10,
      fontSize: 50,
      fontWeight: "800"
      // top: 50
    },
    container: {
      height: 100,
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bass: { height: 275, width: 275
    },
  });