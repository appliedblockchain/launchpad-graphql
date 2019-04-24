const koaRouter = require('koa-joi-router')
const router = koaRouter()
const Joi = koaRouter.Joi
const jwt = require('jsonwebtoken')
const usersDb = require('../../db/users')

const routes = [
  {
    method: 'post',
    path: '/login',
    validate: {
      type: 'json',
      body: Joi.object()
    },
    handler: async ctx => {
      const { email } = ctx.request.body

      // Fetch user from db - check password etc, currently does not use hashed passwords
      const user = await usersDb.findOne(email)

      const token = jwt.sign({
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': [ 'editor', 'user', 'admin' ],
          'x-hasura-default-role': `${user.role}`,
          'x-hasura-user-id': `${user.id}`
        }
      }, process.env.JWT_SECRET)

      ctx.ok(token)
    }
  }
]

router.route(routes)

module.exports = router