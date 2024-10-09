// My custom jsverify testing

const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testGraph = 
    jsc.forall("array (pair nat nat)", function(edges) {


        return false
    });

jsc.assert(testGraph, { tests: 1000 });