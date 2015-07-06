'use strict';

var React = require('react');

var EntryRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.entry.title}</td>
        <td>{this.props.entry.amount}</td>
        <td>{this.props.entry.category}</td>
        <td>{this.props.entry.timestamp.toLocaleFormat()}</td>
      </tr>
    );
  }
});

module.exports = EntryRow;
