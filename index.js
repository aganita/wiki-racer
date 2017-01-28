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
