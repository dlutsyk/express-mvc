const guard = require('../guard');

function show() {
    response.send('Hello from Home-Show controller');
}

function user() {
    response.send('Hello from Home-User controller');
}

module.exports.User = user;
module.exports.Show = guard.ensure(['http', 'get'], show);