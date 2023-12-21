from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# MySQL configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/testdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class YourTable(db.Model):
    # Define your table model here
    __tablename__ = 'alarm_data'
    # Define columns as class variables, for example:
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    # Add more columns as needed

@app.route('/')
def index():
    return render_template('fetch-data.html')

@app.route('/get_data')
def get_data():
    data = YourTable.query.all()
    result = [{'id': item.id, 'name': item.name} for item in data]
    return jsonify(result)

# Move db.create_all() inside the if __name__ == '__main__' block
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

