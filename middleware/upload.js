const multer = require('multer');
const router = require('express').Router();

// config multer storage
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './client/public/uploads');
  },
  filename: (req, file, callback) => {
    callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  }
});

// filter file type
const filefilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/webp'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: filefilter });

module.exports = { upload };
