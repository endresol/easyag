const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const shecma = {
      email: Joi.string().email(),
      password: Joi.string().min(8).required(),
    };

    const {error, value} = Joi.validate(req.body, shecma);

    if (error) {
      switch (error.details[0].context.key) {
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
      }
    }
    else {
      next();
    }
  },
};
