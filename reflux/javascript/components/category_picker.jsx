'use strict';

var React = require('react');

var CategoryPicker = React.createClass({
  _onChange: function() {
    var category = React.findDOMNode(this.refs.categoryFilter).value;
    this.props.setCategory(category);
  },

  render: function() {
    var categories = Object.keys(this.props.allEntries).map(function(key) {
      return this.props.allEntries[key].category;
    }.bind(this));

    var optionNodes = $.unique(categories).map(function(category) {
      return <option key={category} value={category}>{category}</option>;
    });

    return (
      <div>
        Filter by category:
        <select ref="categoryFilter" onChange={this._onChange}>
          <option value="">All</option>
          {optionNodes}
        </select>
      </div>
    );
  }
});

module.exports = CategoryPicker;
