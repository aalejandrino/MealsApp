import { MEALS } from "../../data/dummy-data";

import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );

      if (existingIndex >= 0) {
        const newFavs = [...state.favoriteMeals];
        newFavs.splice(existingIndex, 1);

        return { ...state, favoriteMeals: newFavs };
      } else {
        const newMeal = state.meals.find(meal => meal.id === action.mealId);
        const newFavs = state.favoriteMeals.concat(newMeal);

        return { ...state, favoriteMeals: newFavs };
      }

    default:
      return state;
  }
};

export default mealsReducer;
