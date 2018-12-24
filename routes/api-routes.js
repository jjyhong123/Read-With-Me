const express = require('express');
const multer = require('multer')
const bodyParser = require('body-parser');
const keys = require('../config/keys/keys');
const router = express.Router();

const { Translate } = require('@google-cloud/translate');
const vision = require('@google-cloud/vision');

const AWS = require('aws-sdk');
const db = require("../models");

const client = new vision.ImageAnnotatorClient({ keyFilename: keys.google.applicationCredentials })
const translate = new Translate({ keyFilename: keys.google.applicationCredentials });

AWS.config.logger = console;

AWS.config = new AWS.Config({
  accessKeyId: keys.amazon.accessKeyId,
  region: keys.amazon.region,
  secretAccessKey: keys.amazon.secretAccessKey
});

const polly = new AWS.Polly.Presigner();

// Automatically parse request body as form data
router.use(bodyParser.urlencoded({ extended: false }));

var testMulter = multer().single("image")

const convertLanguageToSpeaker = (language) => {
  const languageSpeakers = { 'zh': 'Zhiyu', 'da': 'Naja', 'nl': 'Lotte', 'en': 'Joanna', 'fr': 'Celine', 'de': 'Marlene', 'hi': 'Aditi', 'is': 'Dora', 'it': 'Carla', 'ja': 'Mizuki', 'ko': 'Seoyeon', 'no': 'Liv', 'pl': 'Ewa', 'pt': 'Ines', 'ro': 'Carmen', 'ru': 'Tatyana', 'es': 'Lucia', 'sv': 'Astrid', 'tr': 'Filiz' }
  return languageSpeakers[language]
}

const handleTextToVoice = (hablante, texto, req, res, img) => {
  const { url, ...params } = {
    OutputFormat: "mp3",
    Text: texto,
    TextType: "text",
    VoiceId: hablante,
    url: null
  };

  polly.getSynthesizeSpeechUrl(params, [60 * 60 * 24 * 7], (error, url) => {
    if (error) {
      console.log(error.code, error.stack, error)
    }
    res.render("picture", { user: req.user, src: url, text: texto, img: img })
  });
};

router.post(
  '/add',
  testMulter,
  (req, res) => {
    client.textDetection(req.file.buffer, (err, data) => {
      if (err) return res.render("picture", { user: req.user, err: "An error occurred." })
      if (!data.textAnnotations) return res.render("picture", { user: req.user, err: "No text detected in image." })
      // If user is signed in, save this image buffer to database
      if (req.user) {
        db.User.findOneAndUpdate({ googleId: req.user.googleId }, { mostRecentImage: req.file.buffer }).catch(err => res.json(err))
      }
      let detectedLang = data.textAnnotations[0].locale.substr(0, 2)
      let detectedText = data.textAnnotations[0].description.replace(/\n/, " ")
      let speaker = convertLanguageToSpeaker(detectedLang)
      handleTextToVoice(speaker, detectedText, req, res, req.file.buffer)
    })
  }
);

router.post('/review', (req, res) => {
  db.User.findOne({ googleId: req.user.googleId })
    .populate('library')
    .then((dbUser) => {
      let selectedImage = dbUser.library.filter(obj => obj._id == req.body.id)
      db.User.findOneAndUpdate({ googleId: req.user.googleId }, { mostRecentImage: selectedImage[0].image }).catch(err => res.json(err))
      client.textDetection(selectedImage[0].image, (err, data) => {
        let detectedLang = data.textAnnotations[0].locale.substr(0, 2)
        let detectedText = data.textAnnotations[0].description.replace(/\n/, " ")
        let speaker = convertLanguageToSpeaker(detectedLang)
        handleTextToVoice(speaker, detectedText, req, res, selectedImage[0].image)
      })
    })
}
);

router.post('/translate', (req, res) => {

  const text = req.body.text;
  const targetLang = req.body.targetLang;
  const options = { to: targetLang };

  translate
    .translate(text, options)
    .then(results => {
      let translatedText = results[0];
      let speaker = convertLanguageToSpeaker(targetLang);

      db.User.findOne({ googleId: req.user.googleId }).then(dbUser => {
        handleTextToVoice(speaker, translatedText, req, res, dbUser.mostRecentImage);
      })

    })
    .catch(err => {
      console.error('ERROR:', err);
    });
})

module.exports = router;