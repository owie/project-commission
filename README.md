# project-commission
Commission

## Installation

```bash
# clone the repo
$ git clone https://github.com/owie/project-commission.git

# go into app directory
$ cd project-commission

# install app dependencies

# For npm
$ npm i

# For yarn
$ yarn
```

## Basic usage

```bash

# To start
$ npm run dev

# To get the raw computation
$ npm run dev:raw

# To run input json file raw
$ node --es-module-specifier-resolution=node app.js mockData/input.json

# To run input json file rounded
$ node --es-module-specifier-resolution=node app.js mockData/input.json rounded

# To test
$ npm test

```