const koaRouter = require('koa-joi-router')
const router = koaRouter()
const Joi = koaRouter.Joi
const jwt = require('jsonwebtoken')

const routes = [
  {
    method: 'post',
    path: '/auth',
    validate: {
      type: 'json',
      body: Joi.object()
    },
    handler: async ctx => {
      const { token } = ctx.request.body
      const verified = await jwt.verify(token, '5c90a95d02b3ee7ae376166e8e5e9893')
      ctx.ok(verified)
    }
  }
]

router.route(routes)

module.exports = router