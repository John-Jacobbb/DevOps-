from flask import Flask, request

app = Flask(__name__)
FILE_PATH = "content.txt"

@app.route('/')
def index():
    with open(FILE_PATH, 'r') as f:
        return f"<pre>{f.read()}</pre>"

@app.route('/add', methods=['POST'])
def add_content():
    data = request.form.get('data')
    with open(FILE_PATH, 'a') as f:
        f.write(data + "\n")
    return "Content added!"
