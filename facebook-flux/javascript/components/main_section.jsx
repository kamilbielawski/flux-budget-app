'use strict';

var React = require('react');
var EntriesList = require('./entries_list.jsx');

var MainSection = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-md-12">
          <EntriesList entries={this.props.entries}/>
        </div>
      </div>
    );
  }
});

module.exports = MainSection;
