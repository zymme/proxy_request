/**
 * Created by zimmerd on 3/3/16.
 */
var jwt = require('jwt-simple');

var secret = 'mysecretP1nn4c0lk3y@';


var router = require('express').Router();

router.get('/proxy', function(req, res, next) {
    console.log('in proxy ...');
    var url = req.query.url;

    //url = url + "#view/11111/22222";

    console.log('url ' + url);




    res.end();
});

router.get('/token/:pol/:osid', function(req, res, next) {

   console.log("Inisde /token/:pol/:osid function ...");

    var pol = req.params.pol;
    var osid = req.params.osid;

    console.log("Params are " + pol + " " + osid);

    var payload = { policynum: pol, osessid: osid };
    console.log('payload = ', payload);

    var token = jwt.encode(payload, secret, 'HS512');

    console.log('token = ', token);

    res.status(200).json({message: 'ok', token: token});

});

router.get('/gettoken/:token', function(req, res, next) {

    var token = req.params.token;
    console.log('received token = ', token);

    var decoded = jwt.decode(token, secret, 'HS512');
    console.log('decoded token = ', decoded);


    res.status(200).json({ message: 'ok', decoded: decoded });

});

module.exports = router;
