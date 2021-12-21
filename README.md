# image_quality_assesment

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/aiman-al-masoud/image_quality_assessment/blob/main/LICENSE)

This is the website for a group-project aimed at assessing the quality of images using the subjective (rating-based) approach.

<a href="https://www.youtube.com/watch?v=_zmjctS8I1Y">See it in action.</a>


# IMPORTANT NOTICE (ABOUT FLASK, PLEASE READ IT): 

<a href="https://en.wikipedia.org/wiki/Flask_(web_framework)">Flask</a> is the Python web-framework currently being used to develop the back-end of this website. It's simple and easy to use if you know some basic Python. 

(But if anyone has any better proposals for a web framework in Python or Java, please notify the rest).

## Linking Resources:

Flask requires a special syntax to link static resources to html-templates. 

All of the static resources are to be placed in the 'static' folder, and eventually in sub-folders.

Example (linking a css file in html):

```
<link href="{{url_for('static', filename='stylesheets/general.css')}}" rel="stylesheet" type="text/css">
```

(This will tell flask to fetch general.css in the specified location within the static folder).

## Links (hrefs): 

Relative links to any part of this website must be specified according to the names defined in the python decorators for the methods in app.py.

Examples:

```
# this gets called when the homepage (plain web-address) is requested.
@app.route("/")
def on_index():
  pass

```


```
# this gets called when: webaddress/take_test is requested.
@app.route("/take_test")
def on_take_test():
   pass

```

## More about flask:
https://flask-restful.readthedocs.io/en/latest/quickstart.html

(or Stackoverflow).




**That's all, thank you for taking the time to read this!**





# Setting up a local testing environment:

## 1) Clone this repo
...and navigate to its root directory.

## 2) Create a python virtual environment 
...calling it '.my_env' 

(For gitignore-related reasons).

```
$ python3 -m venv .my_env
```

(You'll be prompted to install the 'venv' module if you don't have it yet).

## 3) Activate the virtual environment:

```
$ source ./my_env/bin/activate
```

(You should notice that the console starts displaying the virtual environment's name before your username and the dollar-sign).


## 4) Install this app's dependencies 
... on the virtual environment you just created:

```
(.my_env)$ pip install -r requirements.txt
```
## 5) Run the app on localhost!

```
(.my_env)$ python3 -m flask run
```

#### Sample output:

```
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

Click on the link, and the homepage will be launched on your default browser.


# Tips:

* To avoid a ton of stress while debugging this, please try to turn caching off on your favourite browser:

https://www.webinstinct.com/faq/how-to-disable-browser-cache


# This website will eventually run on a (real) server:

Link: https://placeholderplaceholderplaceholderplaceholder.com

