'use strict';

var AppDispatcher = require('../dispatcher/budget_app_dispatcher');
var Constants = require('../constants/budget_app_constants');

var EntryActions = {
  create: function(title, amount, category) {
    AppDispatcher.dispatch({
      actionType: Constants.ENTRY_CREATE,
      title: title,
      amount: amount,
      category: category
    });
  },

  update: function(id, updates) {
    AppDispatcher.dispatch({
      actionType: Constants.ENTRY_UPDATE,
      id: id,
      updates: updates
    });
  },

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: Constants.ENTRY_DESTROY,
      id: id
    });
  },

};

module.exports = EntryActions;
