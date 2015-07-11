'use strict';

var React = require('react');

var Balance = React.createClass({
  render: function() {
    var total = Object.keys(this.props.entries).reduce(function(sum, currentKey) {
      return sum + this.props.entries[currentKey].amount;
    }.bind(this), 0);

    return (
      <div className="text-right">
        <span style={{'font-size' : '1.6em'}} >TOTAL: ${total}</span>
      </div>
    );
  }
});

module.exports = Balance;
