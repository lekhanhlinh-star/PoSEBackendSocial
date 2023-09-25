const mongoose = require('mongoose');
const  validator = require('validator')


const CommentSchema = new mongoose.Schema(
  {

    Author:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User' ,
        required:true
    },
    Post:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Post' ,
        required:true
    },
    content:{
        type:String
    },
    media:{
        type:[String]
    },
    replies: [{
        content: String,
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now }
      }],
    
    createdAt:{
      type:Date,
      default:Date.now()
    }
    
  },

);

module.exports = mongoose.model("Comment", CommentSchema);