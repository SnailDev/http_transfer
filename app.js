var http = require('http');
var httpProxy = require('http-proxy');
var querystring = require('querystring');

var proxy = httpProxy.createProxyServer({});

http.createServer(function (req, res) {
    delete req.headers.host;
    var query = querystring.parse(req.url.replace("/?", ""));
    req.url = "/";
    proxy.web(req, res, {
        target: query.url,
        changeOrigin: true
    }, (e) => {
        console.log("proxy error call back ");
        console.log(e);
    });
}).listen(3003);
