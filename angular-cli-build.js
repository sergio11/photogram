/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');


module.exports = function(defaults) {

  return new Angular2App(defaults, {
        sassCompiler: {
            includePaths: [
              'src/app/style'
            ]
        },
        vendorNpmFiles: [
          'systemjs/dist/system-polyfills.js',
          'systemjs/dist/system.src.js',
          'zone.js/dist/**/*.+(js|js.map)',
          'es6-shim/es6-shim.js',
          'reflect-metadata/**/*.+(js|js.map)',
          'rxjs/**/*.+(js|js.map)',
          '@angular/**/*.+(js|js.map)',
          'ng2-bootstrap/**/*.js',
          'ng2-translate/**/*.js',
          'moment/min/moment.min.js',
          'angular2-fontawesome/**/*.js',
          'font-awesome/**/*.+(otf|eot|svg|ttf|woff|woff2)',
          'rxjs/**/*.js',
          '@ngrx/**/*.+(js|js.map)'
        ]
  });
};
