const AuthenticationController = require('./controllers/AuthenticationController');
const SongsController = require('./controllers/SongsController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
    app.post('/login', AuthenticationController.login);

    app.get('/songs', SongsController.index);
    app.post('/songs', SongsController.post);
};
