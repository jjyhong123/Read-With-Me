<p align="center"><img src="https://lh3.googleusercontent.com/yW1Iz7F8wlgoaJtkUra-OtudbPl1zEX3BKtdzW76DLxvkxKDqFS59PKwNidY4a0FRgJWo_kzXWNjtxPFutThz5-Vs0FfwnjR7v_1xDzxzptgyHk62dF00ZQ-hE6hXH5fMpSoelfjj6gi_fYuUIvGu0jhiALFWS0BtjnDnMMILOlaQcfhJOVs0Vi-qjHH3YmfiGsCBqQEz2nJOhrVC1sFIoHJaVHnjDiOw0PUq32SB6nhyfv1S_pNlU2JCo-zdNBtqzSXJSDFyhx9lp1J9kFOKIwhYZZpXS9eZiXOkhDTwf5AmbB0l7a4rxlUFjJfPJwd5LfvMAmLjwlJtk4lXPXhtQ2Wtcx9q8TXNTIJBy4UDbfD2zZZVTp7B-Fy5TWlC-2QzkqIIbl9vaSqsqq0q6mNLKDP_ijh98EFjWVEPw_vDsbyYWO_mUduf_nQRgq0MdaUO9XlwXUKK8ocrML7nvmvpstQnqDeqACQc2FPsYChTid3vzFMPN8q1PYs46IuzzCmF67ZlwHAP4uIznrdOFUTS_lrigG15TdWCwVBVn2H8iczDxk_r4WyqD_7qlEaXCuIwuyEqhflyV72xFsJENpZ6MUAZoWsm0s2Mp-UQEOFwYC-SSVL-q7wF_Q8Y8lgSqNol6ytQ8zcF3-TPXURFR9vy7CmcpjAWHANwftJZ8cTzOx1KLaBGDCXjGw9PGdKEQES_YyCghRhlY4x2Ayj=w425-h172-no" alt="Read With Me logo"></p>

# Motivation
Imagine recovering from a stroke to discover that you are suddenly unable to read even the simplest of words, or travelling to a foreign country and finding yourself overwhelmed by the seemingly indecipherable signs and menus. Or that you simply cannot see the words clearly enough because of worsening eyesight. 

I wanted to develop an app that could be used by members of the low-vision community, children/adults encountering reading difficulties, or those travelling/living abroad. With this app, a user can take a picture of a sign, document, or any other text and the app will convert the textual content into clear and comprehensible speech. 

# Technology/Frameworks Used
## APIs
* Google Translate (docs [here](https://cloud.google.com/translate/docs/))
* Google Vision (docs [here](https://cloud.google.com/vision/docs/))
* Amazon Polly (docs [here](https://aws.amazon.com/polly/developers/#documentation))

## Templating Engine
* Handlebars

## Web App Framework
* Express

## Database
* MongoDB

## Front-end Framework
* Bootstrap

## Middleware
* Passport (for Google authentication)
* Multer (for uploading images)

# Usage
The app is mobile-responsive. To ensure that you get to test out all features (namely the image upload via camera feature), it is recommended that you use your mobile device to access the app, which is live and running [here](https://hidden-bastion-70636.herokuapp.com/).  

## On mobile (recommended)
Sign in using your Google account, then go to the picture page. Here, you can take a picture of text with your smartphone camera. (The text can be in any of the 19 supported languages included in the dropdown list.) Upon image submission, the app will return the text transcription and audio narration. From here, you can translate the text and audio into another language or save the image into your library. (If you didn't sign in and try to access either feature, you will get a message prompting you to first sign in.)

On the library page, you will see all the images you've saved. Clicking on an image will redirect you to the picture page and redisplay the image's text and audio. Clicking on the trash icon below an image will remove it from your library.

## On PC
Same as on mobile, but instead of being able to take a picture directly, you are able to upload an image from your local filesystem. Here are some sample images you can save and use when trying the app:

![Sample image 1](https://lh3.googleusercontent.com/R_hNRocdupb8aXqGdpEDajKc6pehapFfmXiq6qY3o7tTIpXkWz57j1WUD5PGRuucVP0cj5twJ855Wpv36ZkA-7zX-F-msg0s30u23sYAC94ergvDWaB3JOxhvswR4-v-iZJgqsE8qbftYTad3HPvSsuzLfR4Q_FKoDS7LylTmegY5QYV-mafy5HIIx0Sr_Xduc8T7OZDYDPrrVVqUCvqM_IS3fzgBB2tk4jhtiq5jxCPYRJN2OQ-71ltUZt45hZjQkcPbx6tulyW1A7hz4cYyMy1EpPNu_yoJkhpTLAc0fmWWl94hftfhB388WgFWTSxAUIyiDhCGkhJwjNmLqlxIWdD6IiBnzxxuyNUO5Etk6OBk0ikH7h2CPChK1DPrMQT_QYT-GmgqnKoxDbyk6mhPqA-TT_xZXAzqt7Nz9q-tSaC4OPc2wL2qQHvWUlfw7mbBKIj_7n53NP2hXHJCwX6fjV2L1dOxKUaBrTQsmrGgTndiZpcEOVl3lMTC8RhhfoNefKZUQqhQLeH8Jtk5WFGUVbhAWjDfNEQXsgeVkc_ctGDy5AMnFrA_avRNZMAOGu2KNz9E771WhIXPmVYIDanaPZPucV1qgT-xJxCbzsxM4T11oV6zuqMzcDhjVmsrtNWdx_j8oDjMonARzc_SGTdCm8=s496-no)

<br>

![Sample image 2](https://lh3.googleusercontent.com/XFhiBim30Lhv3qf9XG52o_w4VK3VPRug2amE-mdM7q-SHxiVwvGhvmyAoL1NX46t_-vDL9_BUSgHwtD-bcKHx4B3D-rtuKeA6h2w1BDuEDuc5agDrciSBuuwQHA8GRJc7k9_FDc6wQN1VDgzIQ63_vTMoQ23hM8KUfjhS3m9fN5758ilxygGNUo3nLHA2lohJSo0TEGIfEn-jpPggnl2TK4RyP993kjFACNj1LtiukAlZ2LAULKCjuugJvKLiNBDJbXvHjpH0dagwxofHWoKP-TSfRS66ZD7qUftilq4Sft16I4oZ_MnwjZwkRmXqaojvIanejZwuP1zriqOIzvG6MdGOL0QCMdXUnokVEUk6kN4CjA8xQVt7PzxDudTPQb4Uqcnl8xOfZe1GkVIlTn9vIo5AbCbielMSfdaepqRRuwQSddBAtsNJlMTFtP7L74ITXu2eYGbV9iuwbNS0lwX8HeOBAM0PH55AoIvyjvRz7mUBCQ8YRoODe08l1ZhWNp1-fW6WTlw7sJ8Qi6xlFm90JtOUSUlmElq-4h6UyQNcpVwqO7IuCXt6rpntQYR2pLHPrDzIoxoelfEIqbOcPnCPgu5rRKOpih_bRlmPXdjKZqvKPzp7pjdfiKfOlLs-6uWMl66sC4RkUlEewTdjuW9ius=s496-no)

## Tips
The text detection is powered by the Google Vision API. For better results:
* Make sure the text you wish to capture is within 90 degrees of the horizontal axis of the picture.
* Multi-column layouts are not supported.
* Avoid highly stylized fonts.

Some things to note when using on mobile:
* On iOS devices, pictures taken in portrait orientation will display rotated clockwise 90 degrees on the library page. 
* Due to a bug inherent to the HTML5 audio element, the generated audio file will only play once, after which point the audio button becomes unresponsive. To play the audio again, you will need to refresh the page.

# Demo (on mobile)

## Part 1: Image capture
![Gif 1](https://lh3.googleusercontent.com/XPUifmB_l3P3fWBYTg_jAP9FW3c-0Cdvv_zyPhMxTZ2wu-LaL2hqR49BHeEaf1wMceddVOHBva0VijrwHRqH_ua-iFtR7WT3HvQNu0RfSWgwDKmyafYfy5Q7iLLd2mMYIMkqCB6AgSqZi4G10mep-aM3lTXtzvPc3F0O_HQagrbL3vUdMP9JDQCotj5X2d1HVocgYTUDLmpUCmRP-3ft5dkbpgHc543f3EEV1_ofMzvYhqTmwWGe1_bfKYNs6_LTMWYgh1NKm4eXd90cgkXbK_c1XqB__6Ele84IywHSvDymjx5SaSNCuVASDfJeUi7PdiWZpEUrR717olLk0Sakj6RIqHyFpBjQl6qOGVjXAstwLUgdnLcazMyzIhgTqvBg2TQpmbYOZydNHuUjW6xYdabfXn2rkKNuD95TbgFW5xte-Ta9TEA4lSAs4CT8m4bgCH8gKfPIRFOJpRGMryPojJrG4mvrlwx0lUTiKbAE5_12HknctLef8cbwsQNZl6DjIhbMzy9sBiif7VlAdd2OCB9GTz8NmxJjLFc0_ZOX_hr-j-yx2P5SqjQ1EYZMRN4unfJAy8Fjgzg7GGw4cx9YqVxhIvzVMAJWA788UMC0U6G7ts2zfMm19DezOV7FMHxZlljRwBxcYNYXumPxATmUhGo=w320-h569-no)

<br>

## Part 2: Upload image and view results
![Gif 2](https://lh3.googleusercontent.com/Dk3_4znQpqPkrezp7n1jEKme-Y0ckPQGbE-hollRaI5oQboFUDDGzqFIdqRGDEuPblR_mPVTv4tgH4aUUJrVEc3_Bawiw7UgmNoD0qnLWuIT4fniS_49uQVDbVqy-wXZCu6v_u0uGMKGL0nTP8pVWDf3gxZ-oEeeXmRs0nmFOFzUldHyQXbxGdrniSKBRoMkGcVEy3PU7Qk_yClaPVOhos3MWjuX0_Y7jL__2iG9a7MGiFHMQHwMI1mtAQ6ejBEK7hOMn_BjyTewG-vwoy1NH3c2XR-ky20IcIZjiq11PsK5W3vRkkw4A5MI5dNp-4WFwiirBnStKY0pQnsebesfX-_pBV9tiYkdYzgJiLj7DdJmo7v33QpxpymsxVDgmJRHjfHjCzcsdCft1K4zLuN0iX7bGOPz0irjUyj_b3I7H5XdqI1sof_x543KU743EgF2iQBB4oDL8bq5z7S4Z2OO-yTs3x6iGBewoPLrFoJndfMWgj6vBawuMnD0c4VxHVuzgvFRXJEtCje_Z7uJbP7_1J51H2jQvSTWqVYsyEXkT2IzA_2Sd1NA6xa1Y75mjIhB4vuWJvfoBDSWmWlEmlvgdwS--G12XSERN9dn08hGkikcfFC6P2ceWTf8KhJ2FbBLLVsI8Zj79lNn84ng3ZSHvfo=w320-h569-no)

<br>

## Part 3: Language translation, save image to library
![Gif 3](https://lh3.googleusercontent.com/ZtR5whZVxwYcM-LgaGRDzPkM6EdWvT8_YMl8l89svDKg9Ge0IGWD4oP1bDzat1qRwiI6l-wMNgVXI_FBYiiu52CaWR-v49wRF2IEkRKqRPJCULm0C8EqTVACo0n9mpiR3y-4pCsUeLhX7aWsOMGR9W0gZds1lHHHYTpUq1_qTxCT_1AvZ7Yo4u9sMW9Y8EqtD40hMucdqsaTubFMewaQR3vQQ4XX3PcEhL6N8DgjPYr-tBi6K7oU_ttT_o2Rt7kyEHTuk6JebkQvMfdSSHsw0oKw6oEjx4JZcMQ5KhFqx7oScyBW61KZSe707OVySVm9oxXpVyRp0joJiTyM1NXnxAOQ4jBjKTgmubJY-UT3ktIqnRVRp5RCsDOjS4ewGaZkcuanrzYSgbx4Ph0NON30FWjf3SEoLowMfIJn4HGdDD4PCwtFuYMIMUAoTU7EMWPH-sv8560zB2hsZAw_GvHNQw-qCpxvoSM0D6ZwhlmqOODu2RLa8yS2aJgo4WSf0mGu6HId4q_FkDr5b98TH0IJ8ytH-v9UtoShzBPicHoCJYxy49tr-JYl_suaBTUJGIg8dW4wXiO4SmGDIRe2z2-1cj3FiAXMZvjad-c8xg0HpTz0GsiwaSjy9OU2WsJTZlFPU5OibuUIfOf1wl7mgX3SjSo=w320-h569-no)

<br>

## Part 4: View saved image in library
![Gif 4](https://lh3.googleusercontent.com/ZJ1MnlPR4QGvEZk0IJHkIFxwwn80DnuUBoFIiKduV7H9hbVnkOzykDVR1oUNNOApfADWtQlKCEf3STRGUu1wPKPTGEfm3-DoLZFXYHsLpXeMNn3tX3HSuY1xzWG7iG_QvJxWg379CUbA_m4PE7DVEwM64RKBvzj7E3_2ti811HtzrxpAUimVsUNTrmbKp046rxFv_PAdd-FANsiksMoTOMf00fqm7xOZ-YZgMhW896cVwIwwvNxtUcNibd1siQiCwZso6k1zTxZYU8i_v4X9gtH98ol4n4_heXhQRYTinLHZz-aLRCit6K7ikEbCrhzH-fvyaUKvl20leokNITnh24yoArSS5fN0_kwYhVvgKvpWRDgurx4ibFlBWf08NNtuSOS9TlXibK95W8z8-roUWEhvwOsL_1LKeSZBzfu7j5nyyDjrOlIYr-2V9b150bkgqFSMNhmiMjS4001Ae-gQhNe-dIsJhDdnLzkL2z5CovuUasLuZCuVXgVMhu9KWVpFlwAKAiQN8L_y1iR0Q0bUCKN69DBirTmXFir1OTZ4Q8dNQHnNE-uoPTqCI8wGu1UWaIzieFj-shw92fcAWsGyrOoJV14Ijm-gYtbwUnQJ_aMqNsOtTTGnDsFTaJmi6gqqQjGP6Dr1FlGXaxqnPryrAtY=w320-h569-no)

<br>

## Part 5: Remove image from library
![Gif 5](https://lh3.googleusercontent.com/1XO3wOluIq_qgzAE0PUZOU3LOcdKQBK5vfhKCbCir-kG71VU4yEADyQ-FhpGsKLWr5bkObj9OT9y_QdziLwu8ugtU2fbjcUJr1VFhSbkQ6ESsGtsNQMXUJfynEzlCayoL9MZ3L0La-QokfPoL9Dyg8pck8lChUPNzvHzomQujgWbXPlgkEaPbRrlMB1rAOqtaToizJT8fz56hQ5uZySbztB5dJ_LVPYE3rOoyDvtATxOmpHh5_ZPyZuwnuOYQgYr7DSEx2VQvbnl9_o1jWIFPBFb9ceYSPSXYIdZv_OphxBHciuEVfOeQCWPksoxlkOGbmOLgm-0rKHXZb38wYJBq3aCz61Y7a-_rES9l6uZpdZ--9BLyf7qBdFerQzzxOSAds-tUJH7SaEMZPAUnl-5jtnyBXqcrcR0KAUPA2TRViVdPuJQVCT1j5FtBXicYUvwUYOxcdt6rDNNQDiMivC_Xs_CSgb7OtT-HHEHT4ig8wbIm9-qHJU5wK_Za3XzjlowTI-5P8SU-WPE_hJRIW6pmlu45LXQTUEVoGUOS-GZEr8_80qPedteJ-iyK2d1sXVwYGJ2DvE8GipwMy8IJ6cCK85GA-XPHzfUzAmj2Wiz75nqteWld9r01a2Ab5vtwKe4XqONR72rCTm9gAZOgpwAh6k=w320-h569-no)


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

## Environment variables for Google authentication (OAuth)
Click on the blue Create credentials button and select OAuth client ID. Select web application and you will then be taken to a page with your client ID and secret. On the same page, you are prompted to enter a Javascript origin and a redirect URI. Set these to http://localhost:3000 and http://localhost:3000/auth/google/redirect, respectively, to complete the authentication setup. The remaining session_cookieKey variable in the env file can be set to whatever string you'd like. It is used to create the coookie which stores information about the authenticated user.

## Environment variables for access to Vision and Translate APIs
Return to the Credentials page and click on the Create credentials button again, this time selecting Service account key. Select JSON and click on Create, which will create the JSON file containing your credentials. You need to assign the contents of this file to the google_config variable in the env file, but you first have to format the JSON to remove the spaces. To do so, paste the one-liner 

```javascript 
console.log(JSON.stringify([JSON_KEY]));
```
into a new Javascript file (replacing [JSON_KEY] with your JSON), run the file in Node, and assign the output (which should be the same JSON without spaces) to google_config in your env file.

## Environment variables for access to Polly API
Start by [creating a new Amazon Web Services account](https://aws.amazon.com/console/). On the AWS Management Console page, search for IAM in the search bar and select. On the left sidebar, select Users and upon redirect, click the Add user button. For Select AWS access type on page 1, select Programmatic access and use default settings for the remaining pages. Once the user is created, select it and click the Security credentials tab on the Summary page. Click the Create access key button, and assign the resulting values to amazon_accessKeyId and amazon_secretAccessKey in your env file. The variable amazon_region can be found in your address bar and corresponds to the region you selected during account creation (e.g., "us-west-2").

You're almost there! Now that you have all your environment variables defined, run the following in your terminal:

```bash
npm run-script preinstall
```

This will create a new file containing your Google JSON credentials at the root directory so it can be accessed by the app.  

# Contributing
Pull requests are welcome.