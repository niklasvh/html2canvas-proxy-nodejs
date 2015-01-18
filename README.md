html2canvas-proxy
=================

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/niklasvh/html2canvas?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

#### Express middleware proxy for html2canvas ####

This library provides proxy middleware using express for [html2canvas](https://github.com/niklasvh/html2canvas).

#### Install ####

    npm install html2canvas-proxy --save

#### Example ####

    var proxy = require('html2canvas-proxy');
    var express = require('express');

    var app = express();
    app.use('/', proxy());

