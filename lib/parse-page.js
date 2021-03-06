const cheerio = require('cheerio')

const getChildUrls = (parentPage, parentPageUrl) => {
  let $ = cheerio.load(parentPage)
  const allLink = $('#mw-content-text').find('a').toArray()

  const wikiLinks = allLink.map((elm) => {
    if (elm.attribs.href) {
      if (elm.attribs.href.slice(0, 6) === '/wiki/') {
        return 'https://en.wikipedia.org' + elm.attribs.href
      } else {
        return elm.attribs.href
      }
    }
  })
  .filter((link) => {
    if (link && link.slice(0,24) === 'https://en.wikipedia.org') {
      return link
    }
  })

  return wikiLinks
}

module.exports = {
  getChildUrls
}
