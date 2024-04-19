from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS  # Importe o CORS
import os

app = Flask(__name__)
CORS(app)

# Caminho para a pasta de imagens
IMAGE_FOLDER = os.path.join('static', 'images')

@app.route('/images')
def list_images():
    """
    Lista os arquivos de imagem na pasta especificada.
    """
    images = [f for f in os.listdir(IMAGE_FOLDER) if os.path.isfile(os.path.join(IMAGE_FOLDER, f))]
    return jsonify(images)

@app.route('/static/images/<filename>')
def serve_image(filename):
    """
    Serve os arquivos de imagem.
    """
    return send_from_directory(IMAGE_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
