# react-webpack-node yeoman generator

## The Stack

- Language: Node.js v6.0.x
- Framework: [React](http://facebook.github.io/react/) + [Flux](https://facebook.github.io/flux/)
- Testing Framework: Mocha + Chai
- Dependency Manager: npm v3.8.x

### Recommended Reading

* [Node](https://nodejs.org/)
* [Webpack](https://webpack.github.io/)
* [React-Router](https://github.com/rackt/react-router)
* [React-Router-Redux](https://github.com/rackt/react-router-redux)
* [Axios](https://github.com/mzabriskie/axios)
* [ESLint](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)
* [Mocha](https://github.com/mochajs/mocha)
* [Chai](https://github.com/chaijs/chai)

---
## Getting Started

    clone this repo
    cd into this repo directory
    npm link
    cd into your new app
    yo react-webpack-node


## Run It

### development
For local dev environments, we use `webpack-dev-server`.

    npm run watch

Access it at http://localhost:8081.

### production

    npm run build && foreman start

By default, the app will run on port 9966.

## Test It

Run tests:

    npm run test