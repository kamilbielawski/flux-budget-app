'use strict';

var React = require('react');
var EntryActions = require('../actions/entry_actions');

var EntryRow = React.createClass({
  _onRemoveClick: function() {
    EntryActions.destroy(this.props.entry.id);
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.entry.title}</td>
        <td>{this.props.entry.amount}</td>
        <td>{this.props.entry.category}</td>
        <td>{this.props.entry.timestamp.toLocaleFormat()}</td>
        <td><a href="#" onClick={this._onRemoveClick}>REMOVE</a></td>
      </tr>
    );
  }
});

module.exports = EntryRow;
