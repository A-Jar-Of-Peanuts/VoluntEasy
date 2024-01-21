const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema({
  title: String,
  location: String,
  description: String,
  time: String,
  lat: Number,
  lng: Number,
  author: {type:Schema.Types.ObjectId, ref: 'User'},

  },
  {
    timestamps: true,
});
  

const PostModel = model('Post', PostSchema);

module.exports = PostModel;

