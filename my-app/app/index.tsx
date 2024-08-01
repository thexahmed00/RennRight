import { ThemedView } from "@/components/ThemedView";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { HoverEffect } from "react-native-gesture-handler";
//main page
export default function Index() {
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>hello</Text>
      <TouchableOpacity onPress={() => {
        console.log('Button pressed!');
        alert('Button pressed!');
      }}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});