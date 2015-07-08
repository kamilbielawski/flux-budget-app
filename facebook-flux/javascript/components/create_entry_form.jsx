'use strict';

var React = require('react');
var EntryActions = require('../actions/entry_actions');

var CreateEntryForm = React.createClass({
  _onAddClick: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title);
    var amount = React.findDOMNode(this.refs.amount);
    var category = React.findDOMNode(this.refs.category);
    EntryActions.create(
      title.value,
      parseFloat(amount.value),
      category.value
    );
    title.value = amount.value = category.value = "";
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-12">
          <form className="form-inline">
            <input type="text" className="form-control" ref="title" placeholder="title" />

            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input type="text" className="form-control" ref="amount" placeholder="amount" />
            </div>

            <input type="text" className="form-control" ref="category" placeholder="category" />

            <input type="submit" className="btn btn-primary" value="Add" onClick={this._onAddClick} />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = CreateEntryForm;
