import { getRoot } from './rootSelector'
import { createSelector } from 'reselect'
import { getEntries, getEntriesByCategory } from './entries'

// Actions
export function selectCategory(category) {
  return {
    type: 'category/set',
    payload: category
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

export const getCategorysEntries = createSelector(
  getEntriesByCategory,
  getEntries,
  getSelectedCategory,
  (entriesByCategory, allEntries, category) =>
    category === 'all' ? allEntries : entriesByCategory[category] || []
)

// Reducer
const defaultState = {
  selectedCategory: 'all',
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
