const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("../../../node-js-jwt-auth-mongodb/app/models/user.model");
db.role = require("../../../node-js-jwt-auth-mongodb/app/models/role.model");

db.ROLES = ["user", "admin", "participant"];

module.exports = db;