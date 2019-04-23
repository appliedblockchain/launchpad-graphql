const Koa = require('koa')
const cors = require('@koa/cors')
const compress = require('koa-compress')
const respond = require('koa-respond')
const middleware = require('./router')

const app = new Koa()

app
  .use(compress())
  .use(respond({ autoMessage: false }))
  .use(cors({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': [ 'GET', 'POST', 'PATCH', 'PUT', 'OPTIONS' ]
  }))
  .use(middleware)

app.listen(8080, console.log('Server listening on port 8080'))
