# This is the back-end!
#To start the server: python3 -m flask run

from flask import Flask, render_template, request
import re
import os
import pandas as pd
from time import time


app = Flask(__name__)
app.config["DEBUG"] = True


@app.route("/")
def on_index():
    return render_template("index.html")


@app.route("/take_test")
def on_take_test():
    # TODO: try shuffling these pictures for each different user. Or filter out some images?
    pictures = get_pictures()
    return render_template("take_test.html",  pictures=pictures)


@app.route("/done_take_test", methods=["POST", "GET"])
def on_done_take_test():

    """
    Accept filled out forms when the user is done taking the test.
    Save them as csvs in the key-value format.
    """
    if request.method == 'POST':
         f = request.form
         df = pd.DataFrame(list(f.items(1)), columns=["key", "value"])
         df.to_csv(f'{app.root_path}/dynamic/rating_forms/{int(time()*1000)}', index=False)
         return render_template("done_take_test.html")

    if request.method == "GET":
        return "<a href='take_test'>Click here</a>"




def get_pictures():
    """
    Gets the paths of all of the pictures in the static images folder.
    """
    return [f'/static/images/{n}' for n in os.listdir(app.static_folder+"/images")]

