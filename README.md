# Cisco-Reddit API

This web application is written in HTML, CSS, & JavaScript. We are using JavaScript to access the Reddit JSON object directly and display the results on the user's screen in a nicely-formatted way.

## Installation

Download the ZIP to your desired directory here:

```bash
https://github.com/Uberck/Cisco-Reddit-API/archive/master.zip
```


The site can be hosted locally or remotely using a webserver/cloud service of your choice (Apache, IIS, AWS, etc.)
Create a directory where you plan on storing the web application and unzip master.zip's contents to that directory. The website can be launched from here directly as well by double-clicking on index.html (make sure style.css & script.js are in the same directory!)

## Usage
After launching "index.html" in your desired mobile or desktop browser, simply enter your favorite Subreddit in the input form and click/tap the Fetch button.

*Please note that for the time being, the Refresh Page button must be clicked/tapped for proper function to resume (reload after every search. This will be fixed in the next release).


## Overview
The application works by executing a JavaScript script that stores logic to access the Reddit API, fetch the required data based on the user's input on an HTML form, and generate a list based on that input.

This web app is also hosted on AWS, and can be accessed with the following URL:

```bash
https://cppc-east-01.s3.amazonaws.com/index.html
```
