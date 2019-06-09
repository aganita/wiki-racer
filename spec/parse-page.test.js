const { getChildUrls } = require('../lib/parse-page');

const testData = `<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr">
  <div>
    <table class="infobox" style="width:22em">
      <tbody>
        <tr>
          <th colspan="2" style="text-align:center;font-size:125%;font-weight:bold;background:#ccc">Malaria</th>
        </tr>
        <tr>
          <td colspan="2" style="text-align:center">Malaria parasite connecting to a <a href="/wiki/Red_blood_cell"
              title="Red blood cell">red blood cell</a></td>
        </tr>
        <tr>
          <th scope="row">Pronunciation</th>
          <td>
            <div class="plainlist">
              <ul>
                <li><span class="nowrap"><span class="IPA nopopups noexcerpt"><a href="/wiki/Help:IPA/English"
                        title="Help:IPA/English">/<span style="border-bottom:1px dotted"><span
                            title="'m' in 'my'">m</span><span title="/ə/: 'a' in 'about'">ə</span><span
                            title="/ˈ/: primary stress follows">ˈ</span><span title="'l' in 'lie'">l</span><span
                            title="/ɛər/: 'are' in 'bare'">ɛər</span><span title="/i/: 'y' in 'happy'">i</span><span
                            title="/ə/: 'a' in 'about'">ə</span></span>/</a></span></span> </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <dl><dd><a href="/wiki/North_African_Campaign" title="North African Campaign">North Africa</a></dd>
    <dd><a href="/wiki/East_African_Campaign_(World_War_II)" title="East African Campaign (World War II)">East Africa</a></dd>
    <dd><a href="/wiki/Anglo-Iraqi_War" title="Anglo-Iraqi War">Iraq</a></dd>
    <dd><a href="/wiki/Syria%E2%80%93Lebanon_Campaign" title="Syria–Lebanon Campaign">Syria–Lebanon</a></dd>
    <dd><a href="/wiki/Anglo-Soviet_invasion_of_Iran" title="Anglo-Soviet invasion of Iran">Iran</a></dd>
  </div>
</div>`


const targetRes = [ 
  'https://en.wikipedia.org/wiki/Red_blood_cell',
  'https://en.wikipedia.org/wiki/North_African_Campaign',
  'https://en.wikipedia.org/wiki/East_African_Campaign_(World_War_II)',
  'https://en.wikipedia.org/wiki/Anglo-Iraqi_War',
  'https://en.wikipedia.org/wiki/Syria%E2%80%93Lebanon_Campaign',
  'https://en.wikipedia.org/wiki/Anglo-Soviet_invasion_of_Iran' 
]

test('return all wiki urls from the given page', () => {
  expect(getChildUrls(testData)).toEqual(targetRes)
});


