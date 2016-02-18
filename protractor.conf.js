'use strict'
require('babel-register')

exports.config = {
  seleniumServerJar: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.51.0.jar',
  specs: ['ui_test/*.js'],
  jasmineNodeOpts: {defaultTimeoutInterval: 120000}
}
