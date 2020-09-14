const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(isValid);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json({msg: err})
        bcrypt.hash(newUser.password, salt, (hashErr, hash) => {
          if (hashErr) return res.status(500).json({msg: hashError});
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              console.log("saved user", user)
              jwt.sign(
                {_id: user._id},
                keys.secretOrKey,
                {
                  expiresIn: 31556926, // 1 year in seconds
                },
                (jwtError, token) => {
                  if (jwtError) {
                    return res.status(500).json({msg: jwtError})
                  }
                  console.log("done finally", user)
                  res.json({
                    success: true,
                    user: {email: user.email, first_name: user.first_name, last_name: user.last_name},
                    token: "Bearer " + token,
                  });
                }
              );
            })
            .catch((err) => {
              console.log(err); 
              return res.status(500).json({msg: err}) 
            });
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        };

        // Sign token
        jwt.sign(
          {_id: user._id},
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            if (err)return res.status(500).json({msg: err}) 
            res.json({
              success: true,
              user: payload,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password is incorrect" });
      }
    });
  });
});

module.exports = router;
