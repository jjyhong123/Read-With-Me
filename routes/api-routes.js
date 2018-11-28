const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const bodyParser = require('body-parser');
const images = require('../lib/images');
const keys = require('../config/keys/keys');
const router = express.Router();

// GOOGLE STUFF
'use strict';

const vision = require('@google-cloud/vision');
const { Translate } = require('@google-cloud/translate');

// Creates a client (FIX ROUTE?)
const client = new vision.ImageAnnotatorClient({
  projectID: "read-with-me-auth",
  keyFilename: "./config/keys/read-with-me-auth-credentials.json"
});

// END OF GOOGLE STUFF

// AMAZON STUFF
const AWS = require('aws-sdk');

AWS.config.logger = console;

AWS.config = new AWS.Config({
  accessKeyId: keys.amazon.accessKeyId,
  region: keys.amazon.region,
  secretAccessKey: keys.amazon.secretAccessKey
});

// AMAZON STUFF

const convertLanguageToSpeaker = (language) => {
  const languageSpeakers = { 'zh': 'Zhiyu', 'da': 'Naja', 'nl': 'Lotte', 'en': 'Joanna', 'fr': 'Celine', 'de': 'Marlene', 'hi': 'Aditi', 'is': 'Dora', 'it': 'Carla', 'ja': 'Mizuki', 'ko': 'Seoyeon', 'no': 'Liv', 'pl': 'Ewa', 'pt': 'Ines', 'ro': 'Carmen', 'ru': 'Tatyana', 'es': 'Lucia', 'sv': 'Astrid', 'tr': 'Filiz' }
  return languageSpeakers[language]
}

const handleTextToVoice = (hablante, texto, imagen, req, res) => {
  const { url, ...params } = {
    OutputFormat: "mp3",
    Text: texto,
    TextType: "text",
    VoiceId: hablante,
    url: null
  };

  const polly = new AWS.Polly.Presigner();
  polly.getSynthesizeSpeechUrl(params, [60 * 60 * 24 * 7], (error, url) => {
    if (error) {
      console.log(error.code, error.stack, error)
    }
    res.render("picture", { user: req.user, src: url, image: imagen, text: texto })

  });
};

const Polly = () => {
  return new AWS.Polly({ apiVersion: '2016-06-10' })
}

// END OF AMAZON STUFF

// Automatically parse request body as form data
router.use(bodyParser.urlencoded({ extended: false }));

// ----START OF ROUTES---- //

router.post(
  '/add',
  images.multer.single('image'),
  images.sendUploadToGCS,
  (req, res, next) => {

    // GOOGLE STUFF
    let data = req.body;
    data.imageUrl = req.file.cloudStoragePublicUrl;

    // Performs text detection on the local file
    client
      .textDetection(data.imageUrl)
      .then(results => {
        let detections = results[0].textAnnotations[0];
        if (detections) {
          let language = detections.locale;
          let text = detections.description.replace(new RegExp('\\n', 'g'), ' ')
          let image = data.imageUrl;
          let speaker = convertLanguageToSpeaker(language);
          handleTextToVoice(speaker, text, image, req, res);
        } else {
          res.render("picture", { user: req.user, err: "No text detected in image." })
        }
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  }
);

router.post('/translate', (req, res) => {

  // Creates a client
  const translate = new Translate();

  const text = req.body.text;
  const targetLang = req.body.targetLang;
  const image = req.body.image;
  const options = { to: targetLang };

  translate
    .translate(text, options)
    .then(results => {
      let translatedText = results[0];

      let speaker = convertLanguageToSpeaker(targetLang);
      handleTextToVoice(speaker, translatedText, image, req, res);

    })
    .catch(err => {
      console.error('ERROR:', err);
    });

})

module.exports = router;