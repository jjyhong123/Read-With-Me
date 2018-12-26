// Require dependencies
const router = require('express').Router();
const passport = require('passport');
const db = require("../models");

// Auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Auth with google+
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// Callback route for google to redirect to
// Hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
});

module.exports = router;