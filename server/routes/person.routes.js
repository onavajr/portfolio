const PersonController = require('../controllers/person.controllers');

module.exports = (app) => {
    app.get('/api', PersonController.index);
}