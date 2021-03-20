var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  // prueba
  // fs.appendFile('mynewfile1.doc', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});