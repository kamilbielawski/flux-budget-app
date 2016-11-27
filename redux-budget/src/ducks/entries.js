import groupBy from 'lodash/groupBy'
import reject from 'lodash/reject'
import findIndex from 'lodash/findIndex'
import { v4 } from 'node-uuid'
import { getRoot } from './rootSelector'
import { createSelector } from 'reselect'

// Actions
export function createEntry(attributes) {
  return {
    type: 'entry/create',
    payload: attributes,
  }
}

export function updateEntry(id, updates) {
  return {
    type: 'entry/update',
    payload: {
      id,
      updates,
    },
  }
}

export function destroyEntry(id) {
  return {
    type: 'entry/destroy',
    payload: { id },
  }
}

// Selectors
export const getEntries = createSelector(
  getRoot,
  ({ entries }) => entries
)

export const getEntriesByCategory = createSelector(
  getEntries,
  ({ entries }) => groupBy(entries, 'category')
)

// Reducer
const defaultState = {
  entries: [],
}

export default function reducer(
  state = defaultState,
  { type, payload }
) {
  const { entries } = state

  switch (type) {
    case 'entry/create':
      const { title, amount, category } = payload
      return {
        entries: [
          ...entries,
          { title, amount, category, id: v4() },
        ]
      }
    case 'entry/update':
      const updatedIndex = findIndex(entries, { id: payload.id })
      return {
        entries: [
          ...entries.slice(0, updatedIndex),
          Object.assign({}, entries[updatedIndex], payload),
          ...entries.slice(updatedIndex + 1),
        ]
      }
    case 'entry/destroy':
      return reject(entries, { id: payload.id })
    default:
      return state
  }
}