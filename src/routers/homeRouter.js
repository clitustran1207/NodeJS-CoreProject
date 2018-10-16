const HomeController = require('../controllers/homeController');

module.exports = (router) => {
    router.get('/', HomeController.getHome);
}
