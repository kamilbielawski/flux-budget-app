import React from 'react'
import { connect } from 'react-redux'
import { getCategorysEntries } from '../ducks/categories'

export function Balance({ entries }) {
  const total = entries.reduce((sum, entry) => sum + entry.amount, 0)

  return <div className="text-right">
      <span style={{fontSize: '1.6em'}} >
        TOTAL: <strong>${total.toFixed(2)}</strong>
      </span>
    </div>
}

export default connect(
  (state) => ({
    entries: getCategorysEntries(state),
  })
)(Balance)
