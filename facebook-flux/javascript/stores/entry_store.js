'use strict';

var AppDispatcher = require('../dispatcher/budget_app_dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/budget_app_constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _entries = {};

function create(title, amount, category) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _entries[id] = {
    id: id,
    title: title,
    amount: amount,
    category: category,
    timestamp: (new Date())
  };
}

function update(id, updates) {
  _entries[id] = assign({}, _entries[id], updates);
}

function destroy(id) {
  delete _entries[id];
}

var EntryStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _entries;
  }

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.ENTRY_CREATE:
      create(action.title, action.amount, action.category);
      EntryStore.emitChange();
      break;

    case Constants.ENTRY_UPDATE:
      update(action.id, action.updates);
      EntryStore.emitChange();
      break;

    case Constants.ENTRY_DESTROY:
      destroy(action.id);
      EntryStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = EntryStore;
