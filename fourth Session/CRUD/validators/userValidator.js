const joi = require("joi");
joi.objectId= require("joi-objectid")(joi);

const validatorCreateUser = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).max(10).required(),
  });

  return schema.validate(data);
};

const validatorUpdateUser = (data) => {
  const schema = joi.object({
    name: joi.string().min(4).max(10).required(),
    id: joi.objectId().required(),
  });

  return schema.validate(data);
};

module.exports = { validatorCreateUser, validatorUpdateUser };
