from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import cv2
import numpy as np
from skimage import io, img_as_float, img_as_ubyte
from skimage.restoration import estimate_sigma
from skimage.metrics import peak_signal_noise_ratio as psnr
from bm3d import bm3d

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'static/uploads'
PROCESSED_FOLDER = 'static/processed'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

def apply_bm3d_denoising(image_path):
    img = img_as_float(io.imread(image_path, as_gray=True))
    sigma_est = np.mean(estimate_sigma(img))
    denoise_img = bm3d(img, sigma_psd=sigma_est)
    
    # Ensure image values are in the range [0, 1]
    denoise_img = np.clip(denoise_img, 0, 1)
    
    denoise_img_as_8byte = img_as_ubyte(denoise_img)
    bm3d_denoised_image_path = os.path.join(PROCESSED_FOLDER, 'bm3d_' + os.path.basename(image_path))
    io.imsave(bm3d_denoised_image_path, denoise_img_as_8byte)
    return bm3d_denoised_image_path

@app.route('/api/process-image', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file:
        filename = file.filename
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)

        # Apply BM3D denoising
        bm3d_image_path = apply_bm3d_denoising(file_path)

        # Calculate PSNR
        original_img = img_as_float(io.imread(file_path, as_gray=True))
        bm3d_img = img_as_float(io.imread(bm3d_image_path, as_gray=True))
        psnr_value = psnr(original_img, bm3d_img)

        return jsonify({
            'original_image': filename,
            'bm3d_image': os.path.basename(bm3d_image_path),
            'psnr_value': psnr_value
        })

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/processed/<filename>')
def processed_file(filename):
    return send_from_directory(PROCESSED_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)