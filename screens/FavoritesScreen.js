import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import MealList from "../components/MealList";

// import { MEALS } from "../data/dummy-data";

const FavoritesScreen = props => {
  // const favMeals = MEALS.filter(meal => meal.id == "m1" || meal.id == "m2");

  const availableMeals = useSelector(state => {
    return state.meals.favoriteMeals;
  });

  return <MealList listData={availableMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
