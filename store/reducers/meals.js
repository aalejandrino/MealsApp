import { MEALS } from "../../data/dummy-data";

import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

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

    case SET_FILTERS:
      const appliedFilters = action.filters;

      const newFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree === true && meal.isGlutenFree === false)
          return false;
        if (appliedFilters.lactoseFree === true && meal.isLactoseFree === false)
          return false;
        if (appliedFilters.vegan === true && meal.isVegan === false)
          return false;
        if (appliedFilters.vegetarian === true && meal.isVegetarian === false)
          return false;

        return true;
      });

      return { ...state, filteredMeals: newFilteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
