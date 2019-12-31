const guard = require('../guard');

function show() {
    response.render('home', {title:'Test title'});
}

function user() {
    response.send('Hello from Home-User controller');
}

module.exports.User = user;
module.exports.Show = guard.ensure(['http', 'get'], show);