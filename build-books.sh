#!/bin/zsh

# Update thumbnails from fullsize images
magick mogrify -path img/books/ -resize 200x200\> img/books-fullsize/*.jpg

# Run build script for books page
node ./build-books.js