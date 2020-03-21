import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> The Meal Detail Screen! </Text>
      <Text> Success !! </Text>
      <Button
        title="Go to Category Screen"
        onPress={() => {
          props.navigation.navigate({ routeName: "Categories" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
