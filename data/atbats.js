const Papa = require('papaparse')
const fs = require('fs')
const path = require('path')

const raw = fs.readFileSync(path.resolve(__dirname, "atbats.csv"), 'utf-8')
const array = Papa.parse(raw, {header: true, dynamicTyping: true}).data

// console.log(array[1])
module.exports = array