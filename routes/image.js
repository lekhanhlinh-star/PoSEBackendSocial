const express = require('express');
const router = express.Router();
const Image=require("../models/image")
const uploadMiddleware = require("../middlewares/update"); 
const ImageController = require('../controllers/image');


// 
router.post('/v1/api/image', uploadMiddleware.single('image'), ImageController.uploadImage);
router.get('/v1/api/image/:id', ImageController.retriveImage);
module.exports = router;
