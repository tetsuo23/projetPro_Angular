const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const postRoute = require('./app/routes/post.routes');
const userRoute = require('./app/routes/user.routes');
const app = express();

const fs = require('fs');

var appio = require('express')();
var serverio = require('http').Server(appio);
var io = require('socket.io')(serverio);

appio.use(bodyParser.json());
appio.use(bodyParser.urlencoded({
  extended: false
}));

serverio.listen(3002, () => {
  console.log("gloire à Socket.io !!!");
});

io.on('connection', (socket) => {
  console.log("user " + socket.id + " connected !");
  socket.on("upload-image-post", (data) => {
    console.log(data);
    let datas = new Buffer.from(data.data);
    let name = data.name;

    fs.writeFile("../../../../../../../xampp/htdocs/upload/" + name, datas, 'binary', (err) => {
      if (err) return console.log('Error on upload File when add Post : ' + err);
    });
  });
  socket.on('new-message', (datas) => {
    io.emit('new-message', {
      message: datas.message,
      username: datas.username
    });
  });
});

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

const db = require("./app/models");
const Role = db.role;
app.use('/users', userRoute);
app.use('/posts', postRoute);



db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Tetsuo application."
  });
});

// routes
require("./app/routes/auth.routes")(app);
// require("./app/routes/user.routes")(app);
// require("./app/routes/post.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Run run Forest runnnnnnnn !!! ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "participant"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'participant' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });

    }
  });
}