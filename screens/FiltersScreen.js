import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{
          true: Colors.primaryColor
        }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : "white"}
        value={props.state}
        onValueChange={props.onSwitch}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Available Filters / Restrictions </Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onSwitch={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onSwitch={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onSwitch={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onSwitch={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter your Meals!",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            console.log("menu opened");
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10
  }
});

export default FiltersScreen;
