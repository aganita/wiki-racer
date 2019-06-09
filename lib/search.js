'use strict'
const { httpsProxy } = require('./https-proxy')
const { getChildUrls } = require('./parse-page')

const getPath = async (sourceUrl, targetUrl) => {
  const visitedNodes = {
    [sourceUrl]: {
      origin: 'source'
    },
    [targetUrl]:{
      origin: 'target'
    }
  }
  let currentSourceUrl = '',
      currentTargetUrl = '',
      currentPage = '',
      childUrlsFromTarget = [],
      childUrlsFromSource = []

  const sourceQ = [sourceUrl]
  const targetQ = [targetUrl]

  while (sourceQ.length || targetQ.length) {
    currentSourceUrl = sourceQ.shift()
    currentPage = await httpsProxy(currentSourceUrl)
    childUrlsFromSource = getChildUrls(currentPage)
    
    currentTargetUrl = targetQ.shift()
    currentPage = await httpsProxy(currentTargetUrl)
    childUrlsFromTarget = getChildUrls(currentPage)

    for (let i = 0; i < childUrlsFromSource.length; i++) {
      if (visitedNodes[childUrlsFromSource[i]] && visitedNodes[childUrlsFromSource[i]].origin === 'target') {
        console.log('FOUND A MATCH 1')
        let path = getPathArr(childUrlsFromSource[i], currentSourceUrl, visitedNodes)
        return {
          start: sourceUrl,
          end: targetUrl,
          path
        }
      } else if (!visitedNodes[childUrlsFromSource[i]]) {
        visitedNodes[childUrlsFromSource[i]] = {
          parent: currentSourceUrl,
          origin: 'source'
        }

        sourceQ.push(childUrlsFromSource[i])
      }
    }

    for (let i = 0; i < childUrlsFromTarget.length; i++) {
      if (visitedNodes[childUrlsFromTarget[i]] && visitedNodes[childUrlsFromTarget[i]].origin === 'source') {
        console.log('FOUND A MATCH 2', childUrlsFromTarget[i], currentTargetUrl)
        console.log(visitedNodes['https://en.wikipedia.org/wiki/Help:IPA/English'])
        let path = getPathArr(childUrlsFromTarget[i], currentTargetUrl, visitedNodes)
        return {
          start: sourceUrl,
          end: targetUrl,
          path
        }
      } else if (!visitedNodes[childUrlsFromSource[i]]) {
        visitedNodes[childUrlsFromTarget[i]] = { 
          parent: currentTargetUrl,
          origin: 'target'
        }

        targetQ.push(childUrlsFromTarget[i])
      }
    }
  }

  return {}
}

const getPathArr = (url, parent, map) => {
  let path = [],
      rightToLeft = {},
      leftToRight = {}

  
  if (map[url].origin === 'source ') {
    rightToLeft = map[url]
    leftToRight = map[parent]
    path.push(url)
    path.push(parent)
  } else  {
    rightToLeft = map[parent]
    leftToRight = map[url]
    path.push(parent)
    path.push(url)
  }

  let current = rightToLeft
  while (current.parent) {
    path.unshift(current.parent)
    current = map[current.parent]
  }

  current = leftToRight
  while (current.parent) {
    path.push(current.parent)
    current = map[current.parent]
  }

  return path

}

module.exports = {
  getPath
}






// $ ./wikirace '{
//   ''start'':''https://en.wikipedia.org/wiki/Malaria'',
//   ''end'':''https://en.wikipedia.org/wiki/Geophysics''
// }' {
//    ''start'': ''https://en.wikipedia.org/wiki/Malaria'', ''end'': ''https://en.wikipedia.org/wiki/Geophysics'', ''path'': [
//   ''https://en.wikipedia.org/wiki/Malaria'',
//   ''https://en.wikipedia.org/wiki/Agriculture'',
//   ''https://en.wikipedia.org/wiki/M._King_Hubbert'',
//   ''https://en.wikipedia.org/wiki/Geophysics''
//                             ] }