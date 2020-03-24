import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  let selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text> {selectedMeal.title} </Text>
      <Text> Success !! </Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = navData => {
  const mealId = navData.navigation.getParam("mealId");

  let selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: <Text>Favorite!</Text>
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
