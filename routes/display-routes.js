const db = require("../models");
const express = require('express');
const router = express.Router();

//////////////////
// Display routes

// Index page
router.get("/", (req, res) => {
  res.render("index", { user: req.user, home: true })
})

// Picture page
router.get("/picture", (req, res) => {
  res.render("picture", { user: req.user, picture: true })
})

// Library page
router.get("/library", (req, res) => {
  if (req.user) { // If a user is signed in
    // READ: Display all images from database on library page
    db.User.findOne({ googleId: req.user.googleId })
      .populate("library")
      .then((dbUser) => {
        res.render("library", { user: dbUser, library: true })
      })
      .catch((err) => res.json(err))
  } else {
    // Display library page without any images
    res.render("library", { library: true })
  }
})

module.exports = router;