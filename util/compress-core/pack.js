var util = require('util')
var Package = require('./lib/package.js')
var initial_package = __dirname + '/../..'

var p = new Package(initial_package, "/src")

p.catalog()

p.through(function(pk){
     console.dir(pk)   
    })






