const express = require('express');
const chatController = require('./controllers/chatController')
const sessionController = require('./controllers/sessionController')
const loginController = require('./controllers/loginController')
const routes = express.Router();

routes.post('/sessions', sessionController.createSession);
routes.delete('/sessions', sessionController.deleteSession);

routes.post('/message', chatController.sendMessage);

routes.post('/Login', loginController.Login);

module.exports = routes;