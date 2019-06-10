'use strict'
const path = require('path')
const PORT = process.env.PORT || 3000

const fastify = require ('fastify')({
  logger: true
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../public'),
  prefix: '/'
})

fastify.register(require('./routes'))

const start = async () => {
  try {
    console.log(PORT)
    await fastify.listen(PORT, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()