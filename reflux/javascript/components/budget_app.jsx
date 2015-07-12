'use strict';

var React = require('react');
var Reflux = require('reflux');
var Header = require('./header.jsx');
var MainSection = require('./main_section.jsx');
var CreateEntryForm = require('./create_entry_form.jsx');
var EntryStore = require('../stores/entry_store');


var BudgetApp = React.createClass({
  mixins: [Reflux.connect(EntryStore, 'entries')],

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
