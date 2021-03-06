# Wikiracer

## Project Demo 
https://wikiracer.herokuapp.com/

## Description
Wikiracing is a game that people play on Wikipedia. Given a starting article and an ending article, the objective of a wikirace is to get from the starting article to the ending article by only clicking on links occurring in the main bodies of wikipedia articles (not including the side navigation bar or the category footer).

## Stack
- [NodeJS](https://nodejs.org) `10.x` or newer
- [Fasify](https://www.fastify.io/) - web framework for NodeJS
- [cheerio](https://cheerio.js.org/) fast html markup parsing

## For Developers
### Requirements
- [NodeJS](https://nodejs.org) `10.x` or newer
- [npm](https://www.npmjs.com/get-npm) `6.x` or newer

### Run locally
- Clone the repo and install NodeJS components listed in package.json
```shell
$ git clone https://github.com/aganita/wikiracer.git
$ cd wikiracer
$ npm i
```

- Run the web server 
```shell
$ npm start
```

- Access the app on http://localhost:3000

## To do
- [ ] performance - make search faster
- [ ] error handling
- [ ] improve input validation
- [ ] improve test coverage
- [ ] improve security