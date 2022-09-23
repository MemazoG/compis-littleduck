const parser = require('./myparser.js')
/*
console.log(parser.parse("program var int float if else print"))
console.log(parser.parse("; : ,"))
console.log(parser.parse("( ) { } [ ]"))
console.log(parser.parse("> < == = != & |"))
console.log(parser.parse("+ - * /"))
console.log(parser.parse("esteEsUnID123 150 140.35 'buenas tardes 9'"))
console.log(parser.parse("123variable{"))
*/

console.log(parser.parse("program HelloWorld; var a, b : int; x, y, z: float; { estatutos}"))