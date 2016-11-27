import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { getCategories, selectCategory } from '../ducks/categories'

export class CategoryPicker extends Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange() {
    const { onSelectCategory } = this.props
    const category = findDOMNode(this.refs.categoryFilter).value
    onSelectCategory(category)
  }

  render() {
    const { categories } = this.props

    const optionNodes = categories.map(
      category => <option key={ category } value={ category }>{category}</option>
    )

    return <div>
        Filter by category:
        <select ref="categoryFilter" onChange={ this.onChange }>
          <option value="all">All</option>
          {optionNodes}
        </select>
      </div>
  }
}

export default connect(
  (state) => ({
    categories: getCategories(state),
  }),
  (dispatch) => ({
    onSelectCategory(category) {
      dispatch(selectCategory(category))
    }
  })
)(CategoryPicker)
