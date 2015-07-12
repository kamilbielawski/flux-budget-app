'use strict';

var React = require('react');
var BudgetApp = require('./components/budget_app.jsx');

React.render(
  React.createElement(BudgetApp, null),
  document.getElementById('app')
);
