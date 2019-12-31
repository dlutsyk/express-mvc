module.exports = {
    ensure: function (ensurements, callback) {
        return ensurements.every((key) => {
            switch (key.toLowerCase()) {
                case 'get':
                    if (request.method !== 'GET') {
                        return false;
                    }
                    return true;

                case 'post':
                    if (request.method !== 'POST') {
                        return false;
                    }
                    return true;

                case 'https':
                    if (request.protocol !== 'https') {
                        return false;
                    }
                    return true;

                case 'http':
                    if (request.protocol !== 'http') {
                        return false;
                    }
                    return true;
            }
        }) ? callback : false;
    }
};