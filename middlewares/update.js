const multer = require('multer');

// Set up Multer to handle image uploads
const storage = multer.memoryStorage(); // Store the image in memory as a Buffer
const upload = multer({ storage: storage });

module.exports = upload;
