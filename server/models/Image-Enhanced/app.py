from flask import Flask, request, render_template, send_from_directory
import os
import cv2
import numpy as np
from skimage import io, img_as_float, img_as_ubyte
from skimage.restoration import estimate_sigma
from skimage.metrics import peak_signal_noise_ratio as psnr
from bm3d import bm3d

app = Flask(__name__)
UPLOAD_FOLDER = 'static/uploads'
PROCESSED_FOLDER = 'static/processed'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

def apply_radiometric_calibration(image_path, gain, offset):
    img = io.imread(image_path, as_gray=True)
    calibrated_img = (img.astype(float) * gain) + offset
    calibrated_img = np.clip(calibrated_img, 0, 255).astype(np.uint8)
    calibrated_image_path = os.path.join(PROCESSED_FOLDER, 'calibrated_' + os.path.basename(image_path))
    io.imsave(calibrated_image_path, calibrated_img)
    return calibrated_image_path

def apply_filters_and_save(image_path):
    img = cv2.imread(image_path)
    kernel = np.ones((3, 3), np.float32) / 9
    filt_2D = cv2.filter2D(img, -1, kernel)
    blur = cv2.blur(filt_2D, (3, 3))
    gaussian_blur = cv2.GaussianBlur(blur, (3, 3), 0)
    median_blur = cv2.medianBlur(gaussian_blur, 3)
    final_img = cv2.bilateralFilter(median_blur, 9, 75, 75)
    filtered_image_path = os.path.join(PROCESSED_FOLDER, 'filtered_' + os.path.basename(image_path).replace(".tif", ".png"))
    cv2.imwrite(filtered_image_path, final_img)
    return filtered_image_path

def apply_clahe_and_save(image_path):
    image = io.imread(image_path, as_gray=True)
    image_uint8 = (255 * image).astype('uint8')
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    clahe_image = clahe.apply(image_uint8)
    clahe_image_path = os.path.join(PROCESSED_FOLDER, 'clahe_' + os.path.basename(image_path).replace(".tif", ".png"))
    io.imsave(clahe_image_path, clahe_image)
    return clahe_image_path

def apply_bm3d_denoising(image_path):
    img = img_as_float(io.imread(image_path, as_gray=True))
    denoise_img = bm3d(img, 0.1)
    
    # Ensure image values are in the range [0, 1]
    denoise_img = np.clip(denoise_img, 0, 1)
    
    denoise_img_as_8byte = img_as_ubyte(denoise_img)
    bm3d_denoised_image_path = os.path.join(PROCESSED_FOLDER, 'bm3d_' + os.path.basename(image_path))
    io.imsave(bm3d_denoised_image_path, denoise_img_as_8byte)
    return bm3d_denoised_image_path

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        if file:
            filename = file.filename
            file_path = os.path.join(UPLOAD_FOLDER, filename)
            file.save(file_path)

            # Apply processing without NLM
            calibrated_image_path = apply_radiometric_calibration(file_path, gain=1.2, offset=10)
            filtered_image_path = apply_filters_and_save(calibrated_image_path)
            clahe_image_path = apply_clahe_and_save(filtered_image_path)
            bm3d_image_path = apply_bm3d_denoising(clahe_image_path)

            # Calculate PSNR values
            original_img = img_as_float(io.imread(file_path, as_gray=True))
            bm3d_img = img_as_float(io.imread(bm3d_image_path, as_gray=True))
            psnr_value = psnr(original_img, bm3d_img)

            return render_template('results.html',
                                   original_image=filename,
                                   calibrated_image=os.path.basename(calibrated_image_path),
                                   filtered_image=os.path.basename(filtered_image_path),
                                   clahe_image=os.path.basename(clahe_image_path),
                                   bm3d_image=os.path.basename(bm3d_image_path),
                                   psnr_value=psnr_value)
    return render_template('upload.html')

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/processed/<filename>')
def processed_file(filename):
    return send_from_directory(PROCESSED_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
