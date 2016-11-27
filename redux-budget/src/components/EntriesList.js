import React from 'react'
import EntryRow from './EntryRow'

export default function EntriesList({ entries }) {
  const entryNodes = entries.map((entry) => <EntryRow entry={ entry } key={ entry.id }/>)

  return <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { entryNodes }
      </tbody>
    </table>
}
