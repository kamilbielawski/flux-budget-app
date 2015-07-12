'use strict';

var React = require('react');
var EntryActions = require('../actions/entry_actions');

var EntryRow = React.createClass({

  _onRemoveClick: function() {
    EntryActions.entryDestroy(this.props.entry.id);
  },

  render: function () {
    var entry = this.props.entry;
    return (
      <tr>
        <td>{entry.title}</td>
        <td className={entry.amount > 0 ? 'success' : 'danger'}>{entry.amount.toFixed(2)}</td>
        <td>{entry.category}</td>
        <td>{entry.timestamp.toLocaleFormat()}</td>
        <td><a href="#" onClick={this._onRemoveClick}>REMOVE</a></td>
      </tr>
    );
  }
});

module.exports = EntryRow;
