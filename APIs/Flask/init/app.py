from flask import Flask

# initiate the app
app = Flask(__name__)


# define the route directory
@app.route('/')
def home():
    return 'Hello Init App'


app.run(port=3000)
