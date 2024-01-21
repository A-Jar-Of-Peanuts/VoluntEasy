const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema({
  title: String,
  location: String,
  description: String,
  lat: Number,
  lng: Number,
  },
  {
    timestamps: true,
  });
  

const PostModel = model('Post', PostSchema);

module.exports = PostModel;

