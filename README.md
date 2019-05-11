# http_transfer
a proxy to transfer http to https for gitpages

### 项目起因
- gitpages默认走了https协议
- https的ajax请求http因安全限制被拒绝
- https://snaildev.github.io 流量统计接口的https证书过期

### 技术栈
- node
- request
- http-proxy

|
  ----app.js     #主代码逻辑
  |
  ----hosts.json #host白名单

### 使用方法
```bash
URL: https://transfer.develophelper.com/?url={realUrl}
Mehod: GET/POST
```

### 如何接入
1. fork该项目
2. 在hosts.json新增自己的host
3. 提pull request
4. 审核后即可食用


