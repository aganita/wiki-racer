const { getChildUrls } = require('../lib/parse-page');

const testData = `<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr">
<dl><dd><a href="/wiki/North_African_Campaign" title="North African Campaign">North Africa</a></dd>
<dd><a href="/wiki/East_African_Campaign_(World_War_II)" title="East African Campaign (World War II)">East Africa</a></dd>
<dd><a href="/wiki/Anglo-Iraqi_War" title="Anglo-Iraqi War">Iraq</a></dd>
<dd><a href="/wiki/Syria%E2%80%93Lebanon_Campaign" title="Syria–Lebanon Campaign">Syria–Lebanon</a></dd>
<dd><a href="/wiki/Anglo-Soviet_invasion_of_Iran" title="Anglo-Soviet invasion of Iran">Iran</a></dd>
</div>`

const targetRes = [ 'https://en.wikipedia.org/wiki/North_African_Campaign',
'https://en.wikipedia.org/wiki/East_African_Campaign_(World_War_II)',
'https://en.wikipedia.org/wiki/Anglo-Iraqi_War',
'https://en.wikipedia.org/wiki/Syria%E2%80%93Lebanon_Campaign',
'https://en.wikipedia.org/wiki/Anglo-Soviet_invasion_of_Iran' ]

test('return all wiki urls from the given page', () => {
  expect(getChildUrls(testData)).toEqual(targetRes)
});


