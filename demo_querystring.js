var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  var q = url.parse(req.url, true).query;
  //var txt = q.year + " " + q.month;
  var txt = "año: "+q.ano + ", mes: " + q.mes;
  res.end(txt);
}).listen(8080);