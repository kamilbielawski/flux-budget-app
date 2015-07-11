'use strict';

var React = require('react');
var EntriesList = require('./entries_list.jsx');
var Balance = require('./balance.jsx');
var CategoryPicker = require('./category_picker.jsx');

var MainSection = React.createClass({
  setCategory: function(category) {
    this.setState({category: category});
  },

  getInitialState: function() {
    return {
      category: null
    };
  },

  render: function () {
    var entriesToDisplay = Object.keys(this.props.entries);
    if (this.state.category && this.state.category.length > 0) {
      entriesToDisplay = entriesToDisplay.filter(function(key) {
        return this.props.entries[key].category === this.state.category;
      }.bind(this));
    }
    var entries = entriesToDisplay.map(function(key) {
      return this.props.entries[key];
    }.bind(this));

    return (
      <div className="row">
        <div className="col-md-12">
          <CategoryPicker ref="categoryFilter" allEntries={this.props.entries}
                                               setCategory={this.setCategory} />
          <EntriesList entries={entries} />
          <Balance entries={entries} />
        </div>
      </div>
    );
  }
});

module.exports = MainSection;
