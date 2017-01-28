var express = require('express');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var app = express();
var _ = require('lodash');
var rp = require('request-promise'); // DO I NEED THIS?? IF NOT MAKE SURE TO REMOVE FROM DEPENDENCIES

var Node = function(url){
    this.url = url;
    this.parentUrl = null;
    // this.childrenUrl = [];
}

    //var startUrl = 'https://en.wikipedia.org/wiki/Malaria';
    //var endUrl = 'https://en.wikipedia.org/wiki/Geophysics';
    var endUrl = 'https://en.wikipedia.org/wiki/PubMed_Identifier';

//app.get('/', function(req, res){

function raceUrl(startUrl){

    if (startUrl === endUrl) return endUrl;
    else
        request(startUrl, function (error, response, body) {

            if (!error && response.statusCode == 200){

                // get all DOM elements from the page
                var $ = cheerio.load(body);

                // get jQuery object with all the links from the main body of wiki page
                var allLinksArray = $('#mw-content-text').find('a');

                // traverse and filter the jQuery object using lodash and return only wiki links
                var wikiLinksArray = _.map(allLinksArray,(elm) => {
                    if (elm.attribs.href.slice(0, 6) === '/wiki/') return 'https://en.wikipedia.org' + elm.attribs.href;
                    else return elm.attribs.href;
                }).filter((link) => {
                    return link.slice(0,24) === 'https://en.wikipedia.org';
                });
                
                // cache the length for better performance 
                var length = wikiLinksArray.length;
                
                for (var i = 0; i < length; i++){
                    return raceUrl(wikiLinksArray[i]);
                }

                //console.log(wikiLinksArray);
            }else{
                console.log("error kekekeke!!!");
            }
        })
}


console.log(raceUrl('https://en.wikipedia.org/wiki/Malaria'));


    // get the html of the page

//})



// app.get('/letsrace', function(req, res){

//     var startUrl = 'https://en.wikipedia.org/wiki/Malaria';
//     var endUrl = 'https://en.wikipedia.org/wiki/Plasmodium';
//     var path = [];
//     var json = { start : startUrl, end : endUrl, path : path};

//     var treeRoot = new Node(startUrl)
//     var currentNode;

//     function getPage(url){
//         // console.log(url)
//         request(url, function(error, response, html){
//             console.log(url)
//             if(error) console.error(error)

//             currentNode = new Node(url)

//             var $ = cheerio.load(html);


//             if($('#mw-content-text').find("a[href^='/wiki/Proffftozoa']").attr('href')){
//                 // fs.writeFile('results.json', JSON.stringify(json, null, 4), function(err){
//                 //     console.log('Success. Please check your project file for the results.json file');
//                 // })
//                 res.send('Success. Please check your project file for the results.json file')
//                 return;
//             }
//             else {
//                 // console.log(currentNode.url)
//                 $('#mw-content-text').find("a[href^='/wiki']").each(function(){
//                     var aTag = $(this);
//                     // console.log(aTag.attr('href'));
//                     getPage('http://en.wikipedia.org' + aTag);
//                 })
//             }
//         });
//     }

//     getPage(startUrl);

// });



// var port = 1337;
// app.listen(port, function () {
//   console.log('Server listening on port ' + port + '. Please navigate to http://localhost:' + port + '/letsrace in your browser.');
// });


// http://blog.modulus.io/node.js-tutorial-how-to-use-request-module
// http://stackoverflow.com/questions/15990639/find-shortest-path-between-two-articles-in-english-wikipedia-in-python

// edge cases if there is two steps away... takes starting and ending if there overlap
// do pages have certain popularity?
// pages length?
// memoization 
	// dijkstra - take a look
	// a star
// look up the averge distance between wikipedia pages... double it... thats going to be the max...
// wikipedia API instead of cheeiro
// wiki graph library

// breadth first query to see what has the most out going links

// Use the Wikipedia API to see what has the most outgoing links
 // click on the link with the most links on that page
 // Do this bidirectionally from the front and back

// categorical things are usually at the top of the page
	// this could be justification for clicking on the links first

// use an es6 set or map to store
	// because array is O(n)
	// set is O or log(n)

// store as an object with keys as path to and path from and unvisited which is an array that items get removed from when you crawl that page

// thought about just using page with most links but if that is a mistaken assumption, it could be a very costly error because there are so many more links to look through

// find words in links that are synonms to the end url
// prioritize how many links
// go three links deep then move to the next
// dpeth and then bredth
    // go three links deep for the most closely related words
    // if that doesnt work, go to the second top node and go three down
        // the next two will be the same as the next two from the first
// dont completely disregard path after three, just move it to the back of the queue


// tried to use A* but couldnt come up with a reasonable hueristic
    // researcvhec it
