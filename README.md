# image_quality_assesment
This is the website for a group-project aimed at assessing the quality of images using the subjective (rating-based) approach.

<a href="https://www.youtube.com/watch?v=_zmjctS8I1Y">See it in action.</a>

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

