#!/usr/bin/env node

'use strict';

var program = require('commander'),
    manifest = require('./package.json'),
    homeDir = require('home-dir'),
    fs = require('fs');

var qtConfig = JSON.parse(fs.readFileSync(homeDir() + '/.qt-config.json'));

program.version(manifest.version)
    .option('s, select [ver]', 'Select qt version [ver]')
    .option('l, list [ver]', 'List Qt versions [ver]')
    .parse(process.argv);

if (program.select) {}

if (program.list) {
    var qtVersions = fs.readdirSync(qtConfig.root);
    console.log(qtVersions);
    qtVersions.forEach(function() {
        if (str.search('^qt-(.*)'))
    });
}
if (process.argv.length < 3) program.help();
