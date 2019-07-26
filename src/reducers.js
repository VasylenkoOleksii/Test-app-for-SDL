//import { combineReducers } from "redux";

export const initialState = {
  autocompletePlanets: [],
  searchInputValue: ''
};

export function SearchBoxComponent(state = initialState, action) {
  switch (action.type) {
    case 'PLANETS_FETCHED':
      return Object.assign({}, state, {
        autocompletePlanets: action.results,
      })
    case 'INPUT_CHANGED':
      return Object.assign({}, state, {
        searchInputValue: action.searchInputValue
      })
    default: 
      return state
  }
}
