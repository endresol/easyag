const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const shecma = {
      fullname: Joi.string().required(),
      email: Joi.string().email(),
      password: Joi.string().min(8).required(),
    };

    const { error } = Joi.validate(req.body, shecma);

    if (error) {
      switch (error.details[0].context.key) {
        case 'fullname':
          res.status(400).send({
            error: 'Name is required.',
          });
          break;
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email.',
          });
          break;
        case 'password':
          res.status(400).send({
            error: 'The password need to contain atleas 8 characters',
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information',
          });
      }
    } else {
      next();
    }
  },
};
