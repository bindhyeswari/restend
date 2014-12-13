var uuid = require('node-uuid');

module.exports = function(model, router) {

    var pluralized = model + 's';
    var path = '/' + pluralized;
    var data = {};

    // GET request to the /models returns all the data available
    router.get(path, function (req, res) {
        res.status(200).json(data);
    });

    // POST request to the /models returns the identifier for the newly created item
    router.post(path, function (req, res) {
        req.body.id = uuid.v4();
        data[req.body.id] = req.body;
        res.status(200).json({ message: 'Created data on resource successfully', id: req.body.id });
    });

    // PUT request to the /models returns the identifier for the newly created item
    router.put(path + '/:id', function (req, res) {
        data[req.params.id] = req.body;
        res.status(200).json({ message: 'Created data on resource successfully', id: req.body.id });
    });

    // POST request to the /models returns the identifier for the newly created item
    router.delete(path + '/:id', function (req, res) {
        delete data[req.params.id];
        res.status(200).json(req.body);
    });


};