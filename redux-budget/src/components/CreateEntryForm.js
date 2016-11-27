import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { createEntry } from '../ducks/entries'

export class CreateEntryForm extends Component {
  constructor() {
    super()
    this.addEntry = this.addEntry.bind(this)
  }

  addEntry() {
    const { onCreateEntry } = this.props

    const transactionType = findDOMNode(this.refs.transactionType)
    const titleRef = findDOMNode(this.refs.title)
    const amountRef = findDOMNode(this.refs.amount)
    const categoryRef = findDOMNode(this.refs.category)

    const amountValue = parseFloat(amountRef.value)
    const amount = transactionType.value === 'income' ? amountValue : -amountValue

    onCreateEntry({
      title: titleRef.value,
      category: categoryRef.value,
      amount,
    })
  }

  render() {
    return <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <select ref="transactionType" className="form-control" >
                <option value="income">Income</option>
                <option value="outcome">Outcome</option>
              </select>

              <input type="text" className="form-control" ref="title" placeholder="title" />

              <div className="input-group">
                <div className="input-group-addon">$</div>
                <input type="text" className="form-control" ref="amount" placeholder="amount" />
              </div>

              <input type="text" className="form-control" ref="category" placeholder="category" />

              <input type="button" className="btn btn-primary" value="Add" onClick={this.addEntry} />
            </form>
          </div>
        </div>
  }
}

export default connect(
  null,
  (dispatch) => ({
    onCreateEntry(attributes) {
      dispatch(createEntry(attributes))
    }
  })
)(CreateEntryForm)
