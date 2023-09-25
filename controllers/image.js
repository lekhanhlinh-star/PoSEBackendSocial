const Image = require('../models/image'); // Replace with the actual path to your imageModel.js file

// Handle image upload


const ImageController={
    uploadImage : async (req, res) => {
        try {
            const { originalname, buffer } = req.file;
            const { name, desc } = req.body;
    
            const newImage = new Image({
                name: name,
                desc: desc,
                img: {
                    data: buffer,
                    contentType: 'image/png' // Set the content type to match your image type (e.g., 'image/jpeg', 'image/png', etc.)
                }
            });
    
            // Save the new image record to the database
            await newImage.save();
    
            return res.status(201).json({ message: 'Image uploaded successfully', image: newImage });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },
    retriveImage: async (req, res) => {
        try {
          const image = await Image.findById(req.params.id);
      
          if (!image) {
            return res.status(404).json({ error: 'Image not found' });
          }
      
          // Send the image data as a response with the appropriate content type
          res.contentType(image.img.contentType)
          const data=image.img.data
          res.status(200).send(data);
        } catch (error) {
          console.error(error);
          return res.status(500).json( error );
        }
      }

    
}

module.exports=ImageController