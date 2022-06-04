'use strict';

const sender = require('./src/sender');
const receiver = require('./src/receiver');

module.exports = {
  sender: sender.handler,
  receiver: receiver.handler,
};
