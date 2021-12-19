#To start the server:
#python3 -m flask run

from flask import Flask, render_template, request
import re

import os

app = Flask(__name__)

app.config["DEBUG"] = True


IMAGES_PATH = app.static_folder+"/images"


pictures =  [f'/static/images/{n}' for n in os.listdir(IMAGES_PATH)]



@app.route("/")
def on_index():
    return render_template("index.html", pictures=pictures)

