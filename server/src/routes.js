const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

const CompetitionController = require('./controllers/CompetitionController');


module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);
  app.post('/login',
    AuthenticationController.login);


  app.get('/competitions',
    CompetitionController.index);
  app.post('/competitions',
    CompetitionController.post);
};
