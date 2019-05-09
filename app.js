const express = require('express');
const request = require('request');
const app = express();

app.use('/', (req, res) => {
    var url = req.query.url;
    if (!url) {
        res.send("请求的url不能为空")
    };
    console.log(url);

    // 安全 url 白名单

    request(url, { method: req.method, body: req.body }, (error, response, body) => {
        if (error) {
            res.send(error);
        }

        res.send(body);
    });
});

app.listen(3003, () => console.log('Example app listening on port 3000!'));