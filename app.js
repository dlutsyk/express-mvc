// Application constructor.
const Application = function () {};

// Reference to the server (express) instance.
// Will be initialized in server.js
Application.prototype.server = null;

// Main fucntion for start initialize application.
Application.prototype.init = function () {

    // Entry point for all requests.
    this.server.all('*', function (req, res, next) {
        global.request = req;
        global.response = res;

        const pathName = request._parsedUrl.pathname;
        const parsedControllerAndNode = pathName.slice(1, pathName.length).split('-');
        const controller = parsedControllerAndNode[0];
        const node = parsedControllerAndNode[1];

        let requiredController;

        try {
            requiredController = require('./controllers/' + controller);
        } catch (error) {
            res.statusMessage = 'URL not found';
            res.status(404).send('URL not found');
            return;
        }

        if (node in requiredController) {
            if (requiredController[node] === false) {
                response.send('Incorrect guard permissions.');
                return;
            }

            // Call specific controller.
            requiredController[node]();
        }

        // next();
    });
}

module.exports = new Application();