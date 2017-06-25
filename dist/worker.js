'use strict';

var events = require('events');
var ping = require('node-http-ping');

var eventEmitter = new events.EventEmitter();
var instances = [];

var performPing = function performPing(widgetId, config) {
  return function () {
    return ping(config.url, config.port || 80).then(function (time) {
      var status = 'slow';

      if (time < 100) {
        status = 'medium';
      }

      if (time < 50) {
        status = 'fast';
      }

      eventEmitter.emit('update', [widgetId], {
        name: config.name,
        status: status,
        time: time + 'ms'
      });
    }).catch(function () {
      eventEmitter.emit('update', [widgetId], {
        name: config.name,
        status: '',
        time: 'unknown'
      });
    });
  };
};

var getInitialState = function getInitialState(widgetId, config) {
  instances.push({
    widgetId: widgetId,
    config: config
  });

  setInterval(performPing(widgetId, config), config.refresh || 5000);

  return {
    name: config.name,
    status: '',
    time: 'unknown'
  };
};

module.exports = {
  on: eventEmitter.on.bind(eventEmitter),
  getInitialState: getInitialState
};