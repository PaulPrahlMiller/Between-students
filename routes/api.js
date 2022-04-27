const router = require('express').Router();
const multer = require('multer');
const apiController = require('../controllers/api');
const Product = require('../models/Product');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './client/public/uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});
// http://localhost:5000/api/
const upload = multer({ storage: storage });
router.get('/', apiController.welcome);

router.get('/add/items', (req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// router.post('/add', (req, res) => {
//   const newProduct = new Product({
//     title: req.body.title,
//     description: req.body.description
//   });

//   newProduct
//     .save()
//     .then(() => res.json('New item added!'))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

router.post('/test', upload.single('productImage'), (req, res) => {
  //   const url = req.protocol + '://' + req.get('host');
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    productImage: req.file.originalname
    //productImage: req.file.filename
    // productImage: url + '/client/public/uploads/' + req.file.filename
  });

  newProduct
    .save()
    .then(() => res.json('New item added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
