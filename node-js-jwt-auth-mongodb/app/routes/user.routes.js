const {
  authJwt
} = require("../middlewares");
const controller = require("../controllers/user.controller");
const express = require('express');
const userRoutes = express.Router();
let User = require('./../models/user.model')



// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);

    } else {
      res.json(users);
    }
  });
});

userRoutes.route('/add').post(function (req, res) {
  let user = new user(req.body);
  user.save()
    .then(user => {
      res.status(200).json({
        'user': 'user has been added successfully '
      });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);

    } else {
      res.json(users);
    }
  });
});
// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user) {
    res.json(user);
  });
});
// Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (!user)
      res.status(404).send("Record not found");
    else {
      user.UserName = req.bodyUserName;
      user.UserBio = req.body.UserBio;
      user.UserAge = req.body.UserAge;
      user.save().then(user => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({
    _id: req.params.id
  }, function (err, user) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});



module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers:*",
      "Access-Control-Allow-Origin", "*",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isParticipant],
    controller.participantBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};