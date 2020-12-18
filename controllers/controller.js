const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
// exports.create = (req, res) => {
//   console.log('body created>>>>>>>>>>>>',req.body)
//   userobject = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       password: req.body.password
//   }
//   db.users.create(userobject).then(function(created){
//       console.log('user creaeddede>>>>>>',created)
//   })
// };

exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const users = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };
  
    // Save Tutorial in the database
    User.create(users)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};