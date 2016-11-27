import React from 'react'
import { connect } from 'react-redux'
import { getSelectedCategory, getCategorysEntries } from '../ducks/categories'
import CategoryPicker from './CategoryPicker'
import EntriesList from './EntriesList'
import Balance from './Balance'

export function MainSection({ entries, selectedCategory }) {
  return <div className="row">
      <div className="col-md-12">
        <CategoryPicker />
        <EntriesList entries={ entries } selectedCategory={ selectedCategory } />
        <Balance entries={ entries } selectedCategory={ selectedCategory } />
      </div>
    </div>
}

export default connect(state => ({
  entries: getCategorysEntries(state),
  selectedCategory: getSelectedCategory(state),
}))(MainSection)
