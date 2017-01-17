var http  = require('http');

http.createServer(function (req, resp) {

    var x = request('https://www.baidu.com/img/bd_logo1.png')
    req.pipe(x)
    x.pipe(resp)
})