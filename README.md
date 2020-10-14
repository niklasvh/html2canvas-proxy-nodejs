html2canvas-proxy
=================

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/niklasvh/html2canvas?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) 
[![Build Status](https://travis-ci.org/niklasvh/html2canvas-proxy-nodejs.svg)](https://travis-ci.org/niklasvh/html2canvas-proxy-nodejs)
[![NPM Downloads](https://img.shields.io/npm/dm/html2canvas-proxy.svg)](https://www.npmjs.org/package/html2canvas-proxy)
[![NPM Version](https://img.shields.io/npm/v/html2canvas-proxy.svg)](https://www.npmjs.org/package/html2canvas-proxy)

#### Express middleware proxy for html2canvas ####

This library provides proxy middleware using express for [html2canvas](https://github.com/niklasvh/html2canvas).

For html2canvas >=v1.0.0 use >= v1.0.0 of this library.

#### Install ####

    npm install html2canvas-proxy --save

#### Example ####

    var proxy = require('html2canvas-proxy');
    var express = require('express');

    var app = express();
    app.use('/', proxy());

#### Usage ####

In HTML2Canvas do not use these configuration options (or set them to false):
* allowTaint
* useCors

You should use this HTML2Canvas option:
* proxy: '/'

('/' should be replaced with whatever url you used as your proxy url - see Example above)

#### Testing ####

You can check if your proxy is set up correctly like this:
* http://localhost/?url=https://yoururl.here

You should replace http://localhost/ with your own.
