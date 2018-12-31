<p align="center"><img src="https://lh3.googleusercontent.com/yW1Iz7F8wlgoaJtkUra-OtudbPl1zEX3BKtdzW76DLxvkxKDqFS59PKwNidY4a0FRgJWo_kzXWNjtxPFutThz5-Vs0FfwnjR7v_1xDzxzptgyHk62dF00ZQ-hE6hXH5fMpSoelfjj6gi_fYuUIvGu0jhiALFWS0BtjnDnMMILOlaQcfhJOVs0Vi-qjHH3YmfiGsCBqQEz2nJOhrVC1sFIoHJaVHnjDiOw0PUq32SB6nhyfv1S_pNlU2JCo-zdNBtqzSXJSDFyhx9lp1J9kFOKIwhYZZpXS9eZiXOkhDTwf5AmbB0l7a4rxlUFjJfPJwd5LfvMAmLjwlJtk4lXPXhtQ2Wtcx9q8TXNTIJBy4UDbfD2zZZVTp7B-Fy5TWlC-2QzkqIIbl9vaSqsqq0q6mNLKDP_ijh98EFjWVEPw_vDsbyYWO_mUduf_nQRgq0MdaUO9XlwXUKK8ocrML7nvmvpstQnqDeqACQc2FPsYChTid3vzFMPN8q1PYs46IuzzCmF67ZlwHAP4uIznrdOFUTS_lrigG15TdWCwVBVn2H8iczDxk_r4WyqD_7qlEaXCuIwuyEqhflyV72xFsJENpZ6MUAZoWsm0s2Mp-UQEOFwYC-SSVL-q7wF_Q8Y8lgSqNol6ytQ8zcF3-TPXURFR9vy7CmcpjAWHANwftJZ8cTzOx1KLaBGDCXjGw9PGdKEQES_YyCghRhlY4x2Ayj=w425-h172-no" alt="Read With Me logo"></p>

<!-- ![Read With Me logo](public/assets/images/logo3.png?raw=true) -->

# Motivation
Imagine recovering from a stroke to find yourself unable to decipher even the simplest of words on paper, even though you can still understand when spoken to. Or that you move to a foreign country for work-related reasons and find yourself bewildered by the signs and menus.   

I wanted to develop an app that could be used by members of the low-vision community, children/adults with reading differences, or those traveling/living abroad. With this app, a user can take a picture of a sign, document, or any other text and the app will convert the textual content into clear and comprehensible speech. 

# Technology/Frameworks Used
## APIs
* Google Translate
* Google Vision
* Amazon Polly

## Templating Engine
* Handlebars

## Web App Framework
* Express

## Database
* MongoDB

## Front-end Framework
* Bootstrap

# Usage
The app is mobile-responsive. To unlock all the features of the app, it is recommended that you access the app on your mobile device. The live app is available [here](https://hidden-bastion-70636.herokuapp.com/).  

## On mobile (recommended)
Sign in using your Google account, then go to the picture page. Here, you can take a picture of text with your smartphone camera directly. Upon submission, the app will return the text transcription and the audio narration. From here, you can translate the text and audio into another language or save the image into your library. (If you didn't sign in and try to access either feature, you will get a message prompting you to first sign in.)

## On PC
Same as on mobile, but instead of being able to take a picture directly, you are able to upload an image from your local filesystem. 

## Tips
For better results:
* Make sure text is within 90 degrees of the horizontal axis of the picture
* Avoid highly stylized fonts

Some things to note when using on mobile:
* On iOS devices, pictures taken in portrait orientation will display rotated clockwise 90 degrees on the library page. Take pictures in landscape orientation so that they display properly on the library page. 
* Due to a bug inherent to the HTML5 audio element when displayed on iOS, the generated audio file will only play once after which point the audio button becomes unresponsive. To play the audio again, you will need to refresh the page.


# Installation/Configuration
If you need to run the code on your local machine (e.g., to make contributions), begin by navigating to the root directory of the cloned project and installing dependencies:

```bash
npm i
```
This app uses environment variables. Below are the variables used in the env file. The format of each variable is given in brackets.

```
google_clientID=[url]
google_clientSecret=[string]
session_cookieKey=[string]

google_config=[json]
google_applicationCredentials=./read-with-me-auth-credentials.json

amazon_accessKeyId=[string]
amazon_region=[region]
amazon_secretAccessKey=[string]
```

In the snippet above, I have organized the env variables into three groups. The first group contains the variables needed for Google authentication. The second group is used to access the Google Vision (text detection) and Google Translate APIs. The third group is for accessing Amazon Polly. 

The first and second groups of keys can be obtained by [creating a new Google Cloud Platform (GCP) account](https://console.cloud.google.com/getting-started) and creating a new project. Once your project has been created, open the left sidebar menu and click on API & Services, and then Credentials. 

Click on the blue Create credentials button and select OAuth client ID to set up authentication. Select web application and you will then be taken to a page with your client ID and secret. Copy these values and assign them to the google_clientID and google_clientSecret variables in your env file. Returning to the page, you are prompted to enter a Javascript origin and a redirect URI. Set these to http://localhost:3000 and http://localhost:3000/auth/google/redirect, respectively, to complete the authentication setup. The session_cookieKey variable in the env file can be set to any string you'd like.

Once you return the Credentials page, click on the Create credentials button again and this time select Service account key. Select JSON and click on Create, which will create the JSON file containing your credentials. Open this file to examine the contents. We need to assign this JSON to the google_config variable in our env file, but we first have to format it to remove the spaces. You can do this manually, or you can paste this one-liner 

```javascript 
console.log(JSON.stringify([JSON_KEY]));
```
into a throwaway Javascript file (replacing [JSON_KEY] with your JSON, of course), run the file in Node, and paste the stringified JSON for google_config in your env file if you're in a hurry. 

The final set of keys can be obtained by [creating a new Amazon Web Services account](https://aws.amazon.com/console/). On the AWS Management Console page, search for IAM in the search bar and select. On the left sidebar, select Users and upon redirect, click the Add user button. For Select AWS access type on page 1, select Programmatic access and use the default settings for the remaining pages. Once the user is created, select it and click the Security credentials tab on the Summary page. Click the Create access key button, and assign the resulting values to amazon_accessKeyId and amazon_secretAccessKey in your env file. The variable amazon_region can be found in your address bar and corresponds to the region you used during your account creation (e.g., "us-west-2").

You're almost there! Now that you have all your environment variables defined, run the following in your terminal:

```bash
npm run-script preinstall
```

This will create a new file containing your Google JSON credentials at the root directory so it can be accessed by the code.  

You're all done! Now let's get this baby fired up!

```bash
npm start
```

# Code example

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

# Demo
Demo here

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License
[MIT](https://choosealicense.com/licenses/mit/)