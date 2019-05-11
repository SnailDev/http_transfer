const url = require("url");
const http = require('http');
const request = require('request')
const httpProxy = require('http-proxy');
const querystring = require('querystring');

var hostsUrl = "https://raw.githubusercontent.com/SnailDev/http_transfer/master/hosts.json";

var proxy = httpProxy.createProxyServer({});
http.createServer(function (req, res) {
    var queryStr = querystring.parse(req.url.replace("/?", ""));
    request(hostsUrl, function (error, response, body) {
        if (!error) {
            var urlObj = url.parse(queryStr.url);
            if (body.indexOf(urlObj.hostname)) {
                req.url = "/";
                proxy.web(req, res, {
                    target: queryStr.url,
                    changeOrigin: true
                }, (e) => {
                    console.log("----代理返回异常----");
                    console.log(e);
                });
            } else {
                console.log("---非法请求---");
            }
        }else{
            console.log("----github 响应异常----")
        }
    });

}).listen(3003);
