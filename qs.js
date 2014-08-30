#!/usr/bin/env node

'use strict';

var program = require('commander'),
    manifest = require('./package.json'),
    fs = require('fs');

var qtConfig = JSON.parse(fs.readFileSync('/Users/sirspudd/.qt-config.json'));

program.version(manifest.version)
    .option('s, select [ver]', 'Select qt version [ver]')
    .option('l, list [ver]', 'List Qt versions [ver]')
    .parse(process.argv);

if (program.select) {
   var qtVersions = fs.readdirSync(qtConfig.root);
   console.log(qtVersions);

}

if (program.list) {

}
if (process.argv.length < 3) program.help();
