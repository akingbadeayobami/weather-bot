'use strict';
const express = require('express');
const router = express.Router();
const chatController = require('../controllers').chat;

/* GET Route: Returns All Sessions And Their Last Message . */
router.get('/session/all', chatController.getAllSession);

/* GET Route: Returns New Session ID . */
router.get('/session/new', chatController.getNewSession);

/* GET Route: Returns All SessionID's Messages . */
router.get('/session/:session_id', chatController.getChatMessages);

/* POST Route: Creates User Message, Get And Create The Bot Response And Return The Bot Response  */
router.post('/', chatController.postMessage);

module.exports = router;