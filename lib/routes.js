'use strict'

const { httpsProxy } = require('./https-proxy')

async function routes (fastify, options) {
  fastify.get('/', async (req, res) => {
    res.sendFile('index.html')
  })

  fastify.get('/health', async (req, res) => {
    return { hello: 'Ani!'}
  })

  fastify.get('/geturl', async (req, res) => {
    const body = await httpsProxy('https://en.wikipedia.org/wiki/World_War_II')

    return body
  })
}

module.exports = routes