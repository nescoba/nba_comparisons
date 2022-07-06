const Papa = require('papaparse')
const fs = require('fs')

const raw = fs.readFileSync('./atbats.csv', 'utf-8')
const array = Papa.parse(raw, {header: true, dynamicTyping: true}).data

module.exports = array