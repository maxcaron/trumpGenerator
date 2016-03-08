from flask import Flask, render_template, request
from faketrumpgen import FacebookPostBuilder
from flask.ext.bootstrap import Bootstrap
import os.path
import sys
import logging
import shutil
app = Flask(__name__)

Bootstrap(app)
app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)


@app.route('/', methods=["GET", "POST"])
def hello_world():
    return render_template("main.html")


@app.route("/picture", methods=["GET", "POST"])
def get_picture():
    post = FacebookPostBuilder.CreateTrumpPost(request.args.get("message"),
                                               request.args.get("date"),
                                               os.path.dirname(os.path.abspath(__file__)) + "../static/pictures",
                                               debug=False)
    post.create_phrases()
    img_path = "../static/pictures/" + post.post_number + ".jpeg"
    print("Post number: " + post.post_number)
    print("Post save path: " + post.save_path)
    print(img_path)
    return img_path


if __name__ == '__main__':
    app.run(debug=True)