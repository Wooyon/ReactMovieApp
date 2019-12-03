import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default ({ navigation }) => (
  <View style={{ margin: 30 }}>
    <Text>TV</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text>Go To Detail</Text>
    </TouchableOpacity>
  </View>
);
