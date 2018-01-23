'use strict';
const express = require('express');
const router = express.Router();
const chatController = require('../controllers').chat;

router.get('/session/all', chatController.getAllSession);

router.get('/session/new', chatController.getNewSession);

router.get('/session/:session_id', chatController.getChatMessages);

router.post('/', chatController.postMessage);

module.exports = router;