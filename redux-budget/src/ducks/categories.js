import { getRoot } from './rootSelector'
import { createSelector } from 'reselect'
import { getEntriesByCategory } from './entries'

// Actions
export function selectCategory(category) {
  return {
    type: 'category/set',
    payload: category,
  }
}

// Selectors
export const getCategoriesRoot = createSelector(
  getRoot,
  ({ categories }) => categories
)

export const getSelectedCategory = createSelector(
  getCategoriesRoot,
  ({ selectedCategory }) => selectedCategory
)

export const getCategories = createSelector(
  getEntriesByCategory,
  (entriesByCategory) => Object.keys(entriesByCategory)
)

// Reducer
const defaultState = {
  selectedCategory: null,
}

export default function reducer(
  state = defaultState,
  { type, payload }
) {
  switch (type) {
    case 'category/set':
      return { selectedCategory: payload }
    default:
      return state
  }
}
