const express = require('express');
const urlRouter = express.Router();
const UrlController = require('../controllers/UrlController')
console.log("here")
urlRouter.post("/",UrlController.apiGetRedirectUrl);

module.exports = urlRouter;