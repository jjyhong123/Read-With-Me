const db = require("../models");
const express = require('express');

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  res.render("index", { user: req.user, home: true })
})

router.get("/picture", (req, res) => {
  res.render("picture", { user: req.user, picture: true })
})

router.get("/library", (req, res) => {

  if (req.user) {
    db.User.findOne({ googleId: req.user.googleId })
      .populate("library")
      .then((dbUser) => {
        res.render("library", { user: dbUser, library: true })
      })
      .catch((err) => res.json(err))
  } else {
    res.render("library", { library: true })
  }
})

// Export routes for server.js to use.
module.exports = router;