import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform
} from "react-native";

const MealItem = props => {
  const {
    title,
    affordability,
    complexity,
    duration,
    imageUrl
  } = props.itemData.item;

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={[styles.mealRow, styles.mealHeader]}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </ImageBackground>
          </View>
          <View style={[styles.mealRow, styles.mealDetail]}>
            <Text>{duration}M</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  }
});

export default MealItem;
