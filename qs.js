#!/usr/bin/env node

'use strict';

var program = require('commander'),
    manifest = require('./package.json');

program.version(manifest.version)
    .option('s, select [ver]', 'Select qt version [ver]')
    .option('l, list [ver]', 'List Qt versions [ver]')
    .parse(process.argv);

if (program.select) {

}

if (program.list) {

}
if (process.argv.length < 3) program.help();
