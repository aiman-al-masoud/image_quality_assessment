# This is the back-end!
# To start the server: python3 -m flask run

from flask import Flask, render_template, request, send_file
import re
import os
import pandas as pd
from time import time
import subprocess
from random import randint

import json
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

database_filename = app.root_path + "/dynamic/ratings.csv"

try:
    database = pd.read_csv(database_filename)
except:
    database = pd.DataFrame(columns=["timestamp",
        "00_0", "00_1", "00_2",
        "01_0", "01_1", "01_2",
        "02_0", "02_1", "02_2",
        "03_0", "03_1", "03_2",
        "04_0", "04_1", "04_2",
        "05_0", "05_1", "05_2",
        "06_0", "06_1", "06_2",
        "07_0", "07_1", "07_2",
        "08_0", "08_1", "08_2",
        "09_0", "09_1", "09_2"
    ])
    database.to_csv(database_filename)

def raw_data_to_record(raw_data):
    """
    Convert raw data from the form to a record (row). 
    """
    new_record = pd.DataFrame(raw_data).T
    new_record = new_record.rename(columns=new_record.iloc[0])[1:]
    return new_record

def append_to_database(raw_data):
    """
    Append raw data from a new user to the database
    """
    global database
    new_record = raw_data_to_record(raw_data)
    database = pd.concat([database, new_record], join='inner', ignore_index=True)
    database.to_csv(database_filename)

class ImageTypes:
    ORIGINAL = "_0"
    SLIGHTLY_IMPAIRED = "_1"
    HEAVILY_IMPAIRED = "_2"

def get_names():
    return [col[:2] for col in database.columns if ImageTypes.ORIGINAL in col]

def get_mos(img_type):
    cols = [col for col in database.columns if img_type in col]
    return database[cols].mean(axis=0).to_list()

def get_mos_stddev(img_type):
    cols = [col for col in database.columns if img_type in col]
    return database[cols].std(axis=0).to_list()

def stats_getters_generator(stat_f, stat_name):
    def getter():
        result = {}
        result["names"] = get_names()
        result["original-image-" + stat_name] = stat_f(ImageTypes.ORIGINAL)
        result["slightly-impaired-image-" + stat_name] = stat_f(ImageTypes.SLIGHTLY_IMPAIRED)
        result["heavily-impaired-image-" + stat_name] = stat_f(ImageTypes.HEAVILY_IMPAIRED)
        return json.dumps(result)
    return getter

get_mos_json = stats_getters_generator(get_mos, "mos")
get_mos_stddev_json = stats_getters_generator(get_mos_stddev, "stddev-mos")



@app.route("/")
def on_index():
    return render_template("index.html")

@app.route("/take_test")
def on_take_test():
    # TODO: try shuffling these pictures for each different user. Or filter out some images?
    pictures = get_pictures()
    return render_template("take_test.html",  pictures=pictures, pic_path='/static/images/')

@app.route("/graph_display")
def graph_display():
    return render_template("graph_display.html")

@app.route("/done_take_test", methods=["POST", "GET"])
def on_done_take_test():
    """
    Accept filled out forms when the user is done taking the test.
    Save them as csvs in the key-value format.
    """
    if request.method == 'POST':
        f = request.form
        # form data + timestamp to identify user
        raw_data = list(f.items(1)) + [("timestamp", int(time() * 1000))]
        append_to_database(raw_data)
        return render_template("done_take_test.html")

    if request.method == "GET":
        return "<a href='take_test'>Click here</a>"

@app.route("/get-mos-data", methods=["GET"])
def get_mos_data():
    return get_mos_json()

@app.route("/get-stddev-mos-data", methods=["GET"])
def get_stddev_mos_data():
    return get_mos_stddev_json()



# @app.route("/webhook", methods=["POST", "GET"])
# def on_webhook():

#     """
#     Triggered by a GitHub webhook whenever someone pushes a commit on the repo.
#     """
#     #pull_and_refresh()
#     pass
# def pull_and_refresh():

#     """
#     Pulls changes from origin and refreshes the server.
#     """
#     #log = [ f"triggered on {time()}" ]

#     process = subprocess.Popen(["git", "pull"], stdout=subprocess.PIPE, cwd="/home/siqa/mysite/image_quality_assessment")
#     #log.append(process.communicate())
#     process = subprocess.Popen(["touch", "/var/www/siqa_pythonanywhere_com_wsgi.py "], stdout=subprocess.PIPE)
#     #log.append(process.communicate())

#     #log_path = f"{app.root_path}/dynamic/latest_push.txt"
#     #os.mknod(log_path)
#     #with open(log_path, "w") as f:
#     #    f.write(str(log))


def get_pictures():
    """
    Gets the paths of all of the pictures in the static images folder.
    """
    return [pic[:-4] for pic in os.listdir(app.static_folder + "/images")]

# breaks everything on the actual server:
#app.run(host='localhost', port=5000)
