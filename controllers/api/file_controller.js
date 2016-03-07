/**
 * Created by zimmerd on 2/17/16.
 */

// ROUTES FOR OUR API
// ===============================================================================================

var router = require('express').Router();           // get an instance of the express Router

// Setup items needed for controller to read a file

var fs = require('fs');


router.get('/api/filecontents', function(req, res, next) {
    console.log('in /api/filecontents...');

    //res.send({ message: 'hey this will be the file contents coming back to you :)' });

    var contents = fs.readFileSync('/Users/zimmerd/development/node/samplenodeapi/controllers/api/sample_data.json', 'utf8');

    console.log(contents);

    res.send(contents);

});

//router.post('/api/filecontents', function(req, res, next) {
//
//
//});
//
//
//router.delete('....', function(req, res, next) {
//
//
//
//});


router.get('/api/bis/webscrape/ncci', function(req, res, next) {

    console.log("inside /api/bis/webscrape/ncci");

    //do our web stuff /

    //make call to url
    var results = callUrl()

    console.log(results);

    res.json(results).statusCode(200);

    //scrape it




});

function callUrl() {
    return "<html></html>";
}


module.exports = router;