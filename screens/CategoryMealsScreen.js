import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";

import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(meal => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  if (displayedMeals.length < 1)
    return (
      <View style={styles.empty}>
        <DefaultText>Your meal list is empty.</DefaultText>
        <DefaultText>Check your filters!</DefaultText>
      </View>
    );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navData => {
  const catId = navData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
