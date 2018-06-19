var Koa = require('koa')
var Router = require('koa-router')
var bodyParser = require('koa-bodyparser')

var service = require('./service/WebAppService.js')

var app = new Koa()
var router = Router()

app.use(bodyParser())
router
    .get('/ajax/search',async (ctx, next) => {

        var querystring = require('querystring');
        var params = querystring.parse(ctx.req._parsedUrl.query);
        var key = params.key;
        var start = params.start;
        var end = params.end;

        ctx.body = await service.get_search_data(key, start, end).then(res => {
            return res
        })
    });

app.use(router.routes())

app.listen(3001)