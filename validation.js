// Validation
const Joi = require('@hapi/joi');
const { description } = require('@hapi/joi/lib/base');

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    address: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

const addProductValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(2).required(),
    category: Joi.string().min(3).required(),
    owner_id: Joi.string().min(6).required(),
    cost: Joi.number().required(),
    description: Joi.string().min(0)
  });
  return schema.validate(data);
};

const removeValidation = (data) => {
  const schema = Joi.object({
    product_id: Joi.string().required()
  });
  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
  addProductValidation,
  removeValidation
};
