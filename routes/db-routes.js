const db = require("../models");
var bodyParser = require("body-parser");
const router = require('express').Router();
router.use(bodyParser.json({limit: '500mb'}));
router.use(bodyParser.urlencoded({limit: '500mb', extended: true}));

// Create all our routes and set up logic within those routes where required.
router.post("/save", (req, res) => {
    db.Image.findById(req.body.imageId)
    .then((dbImage) => {
        db.Item.create({ pollyUrl: req.body.pollyUrl, image: dbImage.image, text: req.body.text })
        .then((dbItem) => {
            return db.User.findOneAndUpdate({ googleId: req.user.googleId }, { $push: { library: dbItem._id } }, { new: true })
        })
        .then((dbUser) => {
            res.render("picture", { user: req.user, src: req.body.pollyUrl, image: dbImage.image, text: req.body.text, dbRedirect: true, imageId: dbImage._id });
        })
    })
    
    /*
    db.Item.create({ pollyUrl: req.body.pollyUrl, image: imageBuffer, text: req.body.text })
    .then((dbItem) => {
        return db.User.findOneAndUpdate({ googleId: req.user.googleId }, { $push: { library: dbItem._id } }, { new: true })
    })
    .then((dbUser) => {
        res.render("picture", { user: req.user, src: req.body.pollyUrl, image: req.session.img, text: req.body.text, dbRedirect: true });
    })
    .catch(err => res.json(err))
    */
    
});

router.get("/delete/:id", (req, res) => {
    db.Item.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/library"))
    .catch(err => res.json(err))
})

// Export routes for server.js to use.
module.exports = router;