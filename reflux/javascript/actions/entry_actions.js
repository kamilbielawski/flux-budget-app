'use strict';

var Reflux = require('reflux');

var EntryActions = Reflux.createActions([
  "entryCreate",
  "entryUpdate",
  "entryDestroy"
]);

module.exports = EntryActions;
