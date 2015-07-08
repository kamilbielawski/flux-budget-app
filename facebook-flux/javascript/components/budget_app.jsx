'use strict';

var React = require('react');
var Header = require('./header.jsx');
var MainSection = require('./main_section.jsx');
var CreateEntryForm = require('./create_entry_form.jsx');
var EntryStore = require('../stores/entry_store');

function getEntriesState() {
  return {
    entries: EntryStore.getAll()
  };
}

var BudgetApp = React.createClass({
  getInitialState: function() {
    return getEntriesState();
  },

  componentDidMount: function() {
    EntryStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    EntryStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getEntriesState());
  },

  render: function () {
    return (
      <div>
        <div className="container">
          <Header />
          <MainSection entries={this.state.entries}/>
          <CreateEntryForm />
        </div>
      </div>
    );
  }
});

module.exports = BudgetApp;
