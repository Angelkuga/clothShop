var  Koa = require('koa');
var app = new Koa();
var path = require('path');
var serve = require('koa-static');
console.log(path.resolve('../static/'));
app.use(serve(path.resolve('../static/')));
app.listen(8000); 