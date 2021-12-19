#To start the server:
#python3 -m flask run

from flask import Flask, render_template, request
import re

import os

app = Flask(__name__)

app.config["DEBUG"] = True


@app.route("/")
def on_index():
    return render_template("index.html")
    

@app.route("/take_test")
def on_take_test():
    IMAGES_PATH = app.static_folder+"/images"
    pictures =  [f'/static/images/{n}' for n in os.listdir(IMAGES_PATH)]
    return render_template("take_test.html",  pictures=pictures)


@app.route("/done_take_test", methods=["POST", "GET"])
def on_done_take_test():
    f = request.form
    print(f)
    return render_template("done_take_test.html")
