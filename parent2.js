const Module = require('module')

require = Module.createRequire(__filename)

// Prints path of parent2.js
require('./child')
