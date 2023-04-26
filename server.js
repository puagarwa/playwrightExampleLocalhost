var http = require('http');
//const baseUrl = 'localhost';
const baseUrl = process.env.LOCALlHTTPSERVERURL ?? '127.0.0.1'
//create a server object:
http.createServer(function (req, res) {
  res.write('HTTP Server'); //write a response to the client
  res.end(); //end the response
}).listen(process.env.PORT || 3000, baseUrl); //the server object listens on port 3000 by default