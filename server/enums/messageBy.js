'use strict';
const Enum = require('enum');

/**
 * Enum for message sender either of bot or user
 * @readonly
 * @enum {number}
 * @module enums/messageBy
 */

module.exports = new Enum({
    'BOT': 1,
    'USER': 2,
});