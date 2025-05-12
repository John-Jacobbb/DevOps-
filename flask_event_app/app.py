from flask import Flask, render_template, request

app = Flask(__name__)

registrations = []

@app.route('/')
def home():
    return render_template('register.html')

@app.route('/register', methods=['POST'])
def register():
    name = request.form.get('name')
    email = request.form.get('email')
    if name and email:
        registrations.append({'name': name, 'email': email})
        return f"Thank you for registering, {name}!"
    return "Missing name or email."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
