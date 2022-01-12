# Subjective Image Quality Assessment Project - Impaired images generator script

from PIL import Image
import os

# Directory that contains the unimpaired (original) images (00_0.jpg, 01_0.jpg, ...)
unimpaired_images_directory = 'unimpaired_images'

# Directories in which the impaired images will be saved
slightly_impaired_images_directory = 'slightly_impaired_images'
heavily_impaired_images_directory = 'heavily_impaired_images'

# JPEG quality factors used to generate the impaired versions of the images
slight_impairment_quality = 20
heavy_impairment_quality = 10

# Create the necessary directories if they don't exist yet
os.makedirs(slightly_impaired_images_directory, exist_ok=True)
os.makedirs(heavily_impaired_images_directory, exist_ok=True)

def generate_impaired_images(filename):
    """Generates and saves two impaired version of the unimpaired input image.

    Args:
        filename: The filename of the unimpaired image.
    """

    # Generate the two impaired versions of the image and save them in the corresponding directories
    with Image.open(f'{unimpaired_images_directory}/{filename}') as image:
        image.save(f'{slightly_impaired_images_directory}/{filename[:-5]}1.jpg', 'JPEG',
            quality=slight_impairment_quality)
        image.save(f'{heavily_impaired_images_directory}/{filename[:-5]}2.jpg', 'JPEG',
            quality=heavy_impairment_quality)

# Generate the impaired versions of the unimpaired images
for filename in os.listdir(unimpaired_images_directory):
    print(f'Generating the imapaired versions of "{filename}"...')
    generate_impaired_images(filename)

print('Done.')
