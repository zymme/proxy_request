/**
 * Created by zimmerd on 2/19/16.
 */
var router = require('express').Router();           // get an instance of the express Router

// Setup items needed for controller to read a file

var fs = require('fs');


router.get('/api/health', function(req, res, next) {
    console.log('in /api/health...');

    res.json({ message: 'OK hello' }).statusCode(200);

});



module.exports = router;