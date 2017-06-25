'use strict';

var React = require('react');

require('./style.scss');

var Ping = function Ping(_ref) {
  var data = _ref.data;

  return React.createElement(
    'div',
    { className: 'ping widget ' + data.status },
    React.createElement(
      'div',
      { className: 'title' },
      data.name
    ),
    React.createElement(
      'div',
      { className: 'contents' },
      data.time
    )
  );
};

module.exports = Ping;