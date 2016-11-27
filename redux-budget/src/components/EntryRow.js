import React from 'react'
import { connect } from 'react-redux'
import { destroyEntry } from '../ducks/entries'

export function EntryRow({ entry, onDestroyEntry }) {
  return <tr>
      <td>{ entry.title }</td>
      <td className={ entry.amount > 0 ? 'success' : 'danger' }>
        { entry.amount.toFixed(2) }
      </td>
      <td>{ entry.category }</td>
      <td>{ entry.timestamp.toString() }</td>
      <td><a href="#" onClick={ onDestroyEntry.bind(null, entry.id) }>REMOVE</a></td>
    </tr>
}

export default connect(
  null,
  (dispatch) => ({
    onDestroyEntry(id) {
      dispatch(destroyEntry(id))
    }
  })
)(EntryRow)
