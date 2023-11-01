const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  comments: [
    {
      text: {
         type: String,
         required:true
      },
      media:[
        {
        
          filename: { type: String, required: true },
        },
      ],
      
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  media:[
    {
     
      filename: { type: String, required: true },
    },
  ],
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // You can add more blog-related fields as needed.
});

const Blog = mongoose.model('Post', blogSchema);

module.exports = Blog;
