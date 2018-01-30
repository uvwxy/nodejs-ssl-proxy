var https = require('https');
var httpProxy = require('http-proxy');
var fs = require('fs');

// set proxy config vars
var target = process.env.SSL_PROXY_TARGET || 'http://localhost:8080';
var port = process.env.SSL_PROXY_PORT || 8443;

// set ssl certs
var options = {
    key: fs.readFileSync('secrets/key.pem'),
    cert: fs.readFileSync('secrets/cert.pem')
};

// create proxy
var proxy = httpProxy.createProxyServer({});

// configure https server
var app = function (req, res) {
    proxy.web(req, res, { target: target });
}
var server = https.createServer(options, app);

// start the server
server.listen(port);
console.log("proxying", target, "on port", port);