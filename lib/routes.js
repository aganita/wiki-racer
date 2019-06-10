'use strict'
const { getPath } = require('./search')

async function routes (fastify, options) {
  fastify.get('/', async (req, res) => {
    res.sendFile('index.html')
  })

  fastify.get('/geturl', async (req, res) => {
    const startUrl = req.query.start || 'https://en.wikipedia.org/wiki/California'
    const endUrl = req.query.end || 'https://en.wikipedia.org/wiki/Indigenous_Australians'
    let result = {}

    try {
      result = await getPath(startUrl, endUrl)
    } catch (err) {
      fastify.log.error(err)
      res.send('Something bad happened :(')
    }

    return result
  })
}

module.exports = routes