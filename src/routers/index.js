const home = require('./homeRouter');
const task = require('./taskRouter');

module.exports = (router) => {
    home(router);
    task(router);
}