import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default ({ navigation }) => (
  <View style={{ margin: 30 }}>
    <Text>Search</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text>Go to detail</Text>
    </TouchableOpacity>
  </View>
);
