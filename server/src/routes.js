const AuthController = require('./controllers/AuthController');
const SongsController = require('./controllers/SongsController');
const AuthControllerPolicy = require('./policies/AuthControllerPolicy');

module.exports = (app) => {
  app.post('/register', AuthControllerPolicy.register, AuthController.register);
  app.post('/login', AuthController.login);

  app.get('/songs', SongsController.index);
  app.post('/songs', SongsController.post);
};
