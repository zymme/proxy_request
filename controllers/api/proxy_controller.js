/**
 * Created by zimmerd on 3/3/16.
 */
var jwt = require('jwt-simple');
var jwt2 = require('jsonwebtoken');

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

router.get('/tokenv2/:polnum/:osessid', function(req, res, next) {


    console.log("Inisde /tokenv2/:polnum/:osessid function ...");

    var pol = req.params.polnum;
    var osid = req.params.osessid;

    console.log("Params are " + pol + " " + osid);

    var payload = { policynum: pol, osessid: osid };
    console.log('payload = ', payload);


    var payload = { policynum: pol, osessid: osid };
    //{ algorithm: 'RS256'}

    var token = jwt2.sign(payload, secret, { expiresInMinutes: 10, audience: 'urn:pinnfroifoo' });
    console.log('Token generated in v2 ', token);

    res.status(200).json({ message: 'ok', token: token });

});

router.get('/gettokenv2/:token', function(req, res, next) {

    console.log('Inside /tokenv2/:token');

    var token = req.params.token;
    console.log('received token = ', token);

    var decoded = null;

    jwt2.verify(token, secret, { audience: 'urn:pinnfroifoo' }, function(err, decode) {
        console.log("Inside verify results ...");

        if(err) {
            console.log("ERROR ", err);
            res.status(401).json({message: 'error', msg: err});
        }

        if(decode) {
            console.log("SUCCESS ", decode);
            decoded = decode;

            res.status(200).json({message: 'ok', decoded: decode});
        }

    });



    //res.status(200).json({message: 'ok'});

});

module.exports = router;
