const Product = require('../models/Product');

const singleFileUpload = async (req, res, next) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      productImage: req.file.filename
      //productImage: req.file.filename
      // productImage: url + '/client/public/uploads/' + req.file.filename
    });

    newProduct
      .save()
      .then(() => res.json('New item added!'))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  singleFileUpload
};
