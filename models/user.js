const mongoose = require('mongoose');
const  validator = require('validator')


const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    phone_number:{
      type:Number,
      required:true,
      unique:true,
  
      validate: (value) => {
          return value.toString().length >= 9 && value.toString().length <= 10;
      }
  },
    
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: [mongoose.Schema.Types.ObjectId],
       ref: 'User',
       required:true,
      default: [],
    },
    followings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
      required:true,

     default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
    friendRequests: [{
      sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
    }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    birth_day:{
      type:Date,
      required:true,
      
    },
    create_at:{
      type:Date,
      default:Date.now()
    },
    status:{
      type:Number,
      enum:[0,1],
      default:1
    },
    gender:{
      type:String,
      enum:["male","female","other"],
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);