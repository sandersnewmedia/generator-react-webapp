# <%= projectname %>

---

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

    clone the project
    cd into app directory
    npm install

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

## Deploy It

### staging

    git push staging

### production

    git push production

---
