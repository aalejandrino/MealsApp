import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CategoryGridTile = props => {

    const { id, title, color } = props.itemData.item;

    return (
      <TouchableOpacity style={ styles.gridItem } onPress={props.onSelect}>
        <View style={ [styles.container, {backgroundColor: color}] }>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
  }
});

export default CategoryGridTile;