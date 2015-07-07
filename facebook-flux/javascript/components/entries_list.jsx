'use strict';

var React = require('react');
var EntryRow = require('./entry_row.jsx');

var EntriesList = React.createClass({
  render: function () {
    var entryNodes = Object.keys(this.props.entries).map(function(entryKey) {
      var entry = this.props.entries[entryKey];
      return (
        <EntryRow entry={entry} key={"entry-"+entry.title+'-'+entry.timestamp}/>
      );
    }.bind(this));

    return (
      <table className="table table-striped table-bordered">
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
          {entryNodes}
        </tbody>
      </table>
    );
  }
});

module.exports = EntriesList;
