'use strict';

var React = require('react');
var EntryRow = require('./entry_row.jsx');

var EntriesList = React.createClass({
  render: function () {
    var entryNodes = this.props.entries.map(function(entry) {
      return (
        <EntryRow entry={entry} key={"entry-"+entry.title+'-'+entry.timestamp}/>
      );
    });

    return (
      <table className="table table-striped table-bordered">
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
        {entryNodes}
      </table>
    );
  }
});

module.exports = EntriesList;
