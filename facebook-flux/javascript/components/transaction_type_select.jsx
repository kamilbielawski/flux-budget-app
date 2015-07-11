'use strict';

var React = require('react');

var TransactionTypeSelect = React.createClass({
  getValue: function() {
    return React.findDOMNode(this.refs.transactionType).value;
  },
  render: function() {
    return (
      <select ref="transactionType" className="form-control" >
        <option value="income">Income</option>
        <option value="outcome">Outcome</option>
      </select>
    );
  }
});

module.exports = TransactionTypeSelect;
