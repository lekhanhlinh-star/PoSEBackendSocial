const mongoose = require('mongoose');

const shareSchema = new mongoose.Schema({
    originalPostId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
  })

module.exports = mongoose.model("Share", shareSchema);
