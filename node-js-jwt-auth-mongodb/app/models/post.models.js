const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//define collectionand shema for Post
let Post = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  update: {
    type: Date
  }
}, {
  collection: 'Post'
});

module.exports = mongoose.model('Post', Post);