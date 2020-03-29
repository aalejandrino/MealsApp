import React from "react";
import { useSelector } from "react-redux";

import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const mealTitle = itemData.item.title;
    const mealId = itemData.item.id;

    const isFav = favoriteMeals.some(meal => meal.id === mealId);

    return (
      <MealItem
        itemData={itemData}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId,
              mealTitle,
              isFav
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
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

export default MealList;
