from flask import Flask, render_template,  request, jsonify

app = Flask(__name__)

# Rota para a página inicial
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/sum", methods=["POST"])
def soma ():
    try:
        data = request.json
        a = data.get("a")
        b = data.get("b")
        soma =  a + b
        return jsonify({"result": soma})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
