const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
  ctx.body = 'Hello World'
})

const server = app.listen(2018, () => {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
