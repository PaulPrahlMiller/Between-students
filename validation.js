// Validation
const Joi = require('@hapi/joi');
const { description } = require('@hapi/joi/lib/base');

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
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

const removeValidation = (data) => {
  const schema = Joi.object({
    product_id: Joi.string().required()
  });
  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
  removeValidation
};
