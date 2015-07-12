'use strict';

var Reflux = require('reflux');
var EntryActions = require('../actions/entry_actions');
var assign = require('object-assign');

var _entries = {};

var EntryStore = Reflux.createStore({
  listenables: [EntryActions],

  getInitialState: function() {
    return _entries;
  },

  entryCreate: function(title, amount, category) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _entries[id] = {
      id: id,
      title: title,
      amount: amount,
      category: category,
      timestamp: (new Date())
    };
    this.trigger(_entries);
  },

  entryUpdate: function(id, updates) {
    _entries[id] = assign({}, _entries[id], updates);
    this.trigger(_entries);
  },

  entryDestroy: function(id) {
    delete _entries[id];
    this.trigger(_entries);
  }
});

module.exports = EntryStore;
