const express = require('express');
const app = express();
const postRoutes = express.Router();
// Require Post Model in our Routes module


let Post = require('../models/post.models');


//Define store route
postRoutes.route('/add').post(function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(post => {
      res.status(200).json({
        'Post': 'Le poste a bien été ajouté '
      });
    })
    .catch(err => {
      res.status(400).send("impossible d'enregistrer dans la base de données")
    });
});
// Define get data(index or listing) route
postRoutes.route("/").get(function (req, res) {
  Post.find(function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});
// Defined edit route
postRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Post.findById(id, function (err, post) {
    res.json(post);
  });
});
// Defined update route
postRoutes.route('/update/:id').post(function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (!post)
      res.status(404).send("Record not found");
    else {
      post.title = req.body.Title;
      post.content = req.body.Content;
      post.update = new Date();
      post.save().then(post => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route
postRoutes.route('/delete/:id').get(function (req, res) {
  Post.findByIdAndRemove({
    _id: req.params.id
  }, function (err, post) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = postRoutes;