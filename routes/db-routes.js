const db = require("../models");
var bodyParser = require("body-parser");
const router = require('express').Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Create all our routes and set up logic within those routes where required.
router.post("/save", (req, res) => {
    db.User.findOne({ googleId: req.user.googleId })
        .then((dbUser) => {
            db.Item.create({ pollyUrl: req.body.pollyUrl, image: dbUser.mostRecentImage, text: req.body.text })
                .then((dbItem) => {
                    db.User.findOneAndUpdate({ googleId: req.user.googleId }, { $push: { library: dbItem._id } }, { new: true })
                        .then((dbUser) => {
                            res.render("picture", { user: req.user, src: req.body.pollyUrl, text: req.body.text, img: dbUser.mostRecentImage, dbRedirect: true, picture: true });
                        })
                        .catch(err => res.json(err))
                })
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
});

router.get("/delete/:id", (req, res) => {
    db.Item.findByIdAndDelete(req.params.id)
        .then(() => res.send(null))//
        .catch(err => res.json(err))
})

// Export routes for server.js to use.
module.exports = router;