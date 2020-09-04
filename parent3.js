const Module = require('module')
const path = require('path')

require = Module.createRequire(path.resolve('./subfolder/sub.js'))

// Node: Prints path of parent3.js
// Jest: Prints null
require('./child')
