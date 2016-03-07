/**
 * Created by zimmerd on 2/17/16.
 */

//below demonstrates how one can setup a http server simply

//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');
//
//}).listen(3030, 'localhost');
//console.log('Http server running at localhost:3030');



// BASE SETUP
// ===================================================================================================



'use strict';

// call the packages we need for our app
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');                 // cors - Cross Origin Resource Sharing - allow web apps to use the api if they have a different origination


var app = express();                        // define our app using express

app.set('app_name', 'proxy_request');

app.set('port', process.env.PORT || 8811);  // set the port for the app


// setup middleware components to be used

// configure app to use bodyParser()
// this will allow us to get data from a POST http operation
//app.use(bodyParser.urlencoded( { extended: true } ) );
//app.use(bodyParser.json() );
app.use(cors());


// configure a test route to make sure everything is working (accessed at GET http://localhost:8081/api)
var router = express.Router();


app.use(require('./controllers/api/health_controller'));
app.use(require('./controllers/api/proxy_controller'));



// START THE SERVER
// ====================================================================================
app.listen(app.get('port'), function() {
    console.log('Server listening on ' + app.get('port') + ' for application ' + app.get('app_name') + ' ; press Ctrl-C to terminate.');
});

