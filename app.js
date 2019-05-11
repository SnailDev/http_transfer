var http = require('http');
var request = require('request')
var httpProxy = require('http-proxy');
var querystring = require('querystring');
var url = require("url");

var proxy = httpProxy.createProxyServer({});

http.createServer(function (req, res) {
    // delete req.headers.host;
    var query = querystring.parse(req.url.replace("/?", ""));
    request("https://raw.githubusercontent.com/SnailDev/http_transfer/master/writeurl.json", function (error, response, body) {
        console.log(`响应主体: ${body}`);
        var urlObj = url.parse(query.url);
        if (body.indexOf(urlObj.hostname)) {
            req.url = "/";
            proxy.web(req, res, {
                target: query.url,
                changeOrigin: true
            }, (e) => {
                console.log("----代理返回异常----");
                console.log(e);
            });
        } else {
            console.log("---非法请求---");
        }
    });

}).listen(3003);
