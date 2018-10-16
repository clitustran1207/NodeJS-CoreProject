const TaskController = require('../controllers/taskController');

module.exports = (router) => {
    router.post('/insert', TaskController.insert);
    router.get('/find', TaskController.find);
    router.get('/remove', TaskController.findByIdAndRemove);
}