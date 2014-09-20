var express = require('express');
var url = require('url');
var cors = require('cors');
var request = require('request');

module.exports = function() {
    var app = express.Router();

    function validUrl(req, res, next) {
        if (req.query.url == null) {
            next(new Error("No url specified"));
        } else if (typeof(req.query.url) !== "string" || url.parse(req.query.url).host === null) {
            next(new Error("Invalid url specified: " + req.query.url))
        } else {
            next();
        }
    }

    app.use(cors());
    app.get('/', validUrl, function(req, res, next) {
        if (typeof(req.query.callback) === "string") {
            request(req.query.url, function(error, response, body) {
                if (error) {
                    return next(error);
                }
                res.jsonp(new Buffer(body).toString('base64'));
            });
        } else {
            req.pipe(request(req.query.url).on('error', next)).pipe(res);
        }
    });

    return app;
};
