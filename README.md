# generator-babel-boilerplate
[![Travis build status](http://img.shields.io/travis/babel/generator-babel-boilerplate.svg?style=flat)](https://travis-ci.org/babel/generator-babel-boilerplate)
[![Dependency Status](https://david-dm.org/babel/generator-babel-boilerplate.svg)](https://david-dm.org/babel/generator-babel-boilerplate)
[![devDependency Status](https://david-dm.org/babel/generator-babel-boilerplate/dev-status.svg)](https://david-dm.org/babel/generator-babel-boilerplate#info=devDependencies)

A [Yeoman](http://yeoman.io/) generator to author libraries in ES2015 (and beyond!) for Node and the browser.

### Features

✓ Author in [ES2015](https://babeljs.io/docs/learn-es2015/) (including the unit tests)  
✓ Export as ES5 & [UMD](https://github.com/umdjs/umd)  
✓ [Mocha](http://mochajs.org/)-[Chai](http://chaijs.com/)-[Sinon](http://sinonjs.org/) testing stack  
✓ Unit tests that work in Node and in the browser

### Installation

Install `yo` and this generator globally.

`npm install -g yo generator-babel-boilerplate`

### Using Yeoman

Navigate to the directory you'd like to use for your project, then run `yo babel-boilerplate`.

Answer a few questions, and your project will be scaffolded.

### Basic Guide

Write your code in `src`. The entry file is what you named the project in kebab case ([although the filename
can be changed](https://github.com/babel/generator-babel-boilerplate#i-want-to-change-the-primary-source-file)).

Run `npm run build` to compile the source into a distributable format.

Put your unit tests in `test/unit`. The `npm test` command runs the tests using Node. If your library / tests
require the DOM API, see the `test/setup/node.js` file.

### npm Scripts

- `npm test` - Lint the library and tests, then run the unit tests
- `npm run lint` - Lint the source and unit tests
- `npm run watch` - Continuously run the unit tests as you make changes to the source
   and test files themselves
- `npm run test-browser` - Build the library for use with the browser spec runner.
  Changes to the source will cause the runner to automatically refresh.
- `npm run build` - Lint then build the library
- `npm run coverage` - Generate a coverage report

### Browser Tests

The browser spec runner can be opened in a browser to run your tests. For it to work, you must first run `npm run test-browser`. This will set up a watch task that will automatically refresh the tests when your scripts, or the tests, change. The spec runner file is located at `test/runner.html`.

### Code Climate

This library is set up to integrate with Code Climate. If you've never used Code Climate, then you might be wondering
why it's useful. There are two reasons:

1. It consumes code coverage reports, and provides a coverage badge for the README
2. It provides interesting stats on your library, if you're into that kinda thing

Either of these items on the list can simply be ignored if you're uninterested in them. Or you can pull Code Climate
out entirely from the boilerplate and not worry about it. To do that, update the relevant Gulp tasks and the Travis
build.

If you'd like to set up Code Climate for your project, follow [the steps here](https://github.com/babel/generator-babel-boilerplate/wiki/Code-Climate).

### Linting

This boilerplate uses [ESLint](http://eslint.org/) to lint your source. To
change the rules, edit the `.eslintrc` files in the root directory, respectively.

Given that your unit tests typically follow different rules from your library
code, it makes sense to lint them against a separate ESLint configuration. For
this reason, a separate, unit-test specific `.eslintrc` can be found in the
`test` directory.

### FAQ

#### What Babel features are supported?

Nearly all Babel features *should* be supported by this boilerplate.

If you're using certain experimental features, like class properties, async-await,
types, or decorators, then you'll need to install [babel-eslint](https://github.com/babel/babel-eslint)
to use as the parser for ESLint.

If you're still getting an error, follow these steps:

1. Double check to make sure that you're not typoing the new syntax ;)
2. Determine what task is failing (for instance, is it ESLint?)
3. Check that project's issue tracker to see if it is a known issue
4. If it isn't, then open an issue here

Because of the fact that dependencies of this boilerplate, such as ESLint, are maintained by a team separate from Babel, there
may be a delay between when a new feature is added to Babel and when those other libraries add support for it.

#### When should I consider using this boilerplate?

This library is ideal for libraries that export a single file.

#### When might I not want to use this boilerplate?

You can always use this boilerplate as inspiration, but it works best for smaller libraries.
If you're building a full-scale webapp, you will likely need to make more changes to the build system.
This is because the boilerplate only deals with JavaScript; common build tasks
like CSS preprocessing, image minification, or HTML template building are
intentionally omitted from this boilerplate.

There are so many different preferences and needs when it comes to building a
webapp, it wouldn't make sense to pick any one configuration for this boilerplate.

In the broader scheme of things, there's been discussion in the JavaScript community
over whether or not boilerplates are good, or if they are bad. There's no denying
that you might could yourself lost is you pick this up without much experience
with the tools used in this project. But it could also save you a lot of time if you're
simply trying to get a build system set up and running.

Even if you don't intend to use this boilerplate, I believe that boilerplates are
useful as an example and as a source of inspiration. I encourage you to look through
the current state of the project, and through its history, to see different ways to use
Babel with various tools!

#### What's the browser compatibility?

As a rule of thumb, Babel works best in IE9 and above.

#### Are there examples?

Quite a few. Check them out on [the wiki](https://github.com/babel/generator-babel-boilerplate/wiki/Examples).

#### Is there a version for Node-only projects?

There is not a maintained version for Node-only projects. As of Node v6, many of
the most commonly used ES2015 features are [now supported natively in Node](http://node.green/).
I strongly recommend that you weigh the pros and cons of adding a transpiling step to your
server-side code!

#### What's the cost of transpiling?

A thorough analysis of this question can be found
[here](https://github.com/samccone/The-cost-of-transpiling-es2015-in-2016).

### Customizing

This boilerplate is, to a degree, customizable. To make changes,
find what you're looking to do below and follow the instructions.

#### I want to change the primary source file

The primary source file for the library is `src/index.js`. Only the files that this
file imports will be included in the final build. To change the name of this entry file:

1. Rename the file
2. Update the value of `entryFileName` in `package.json` under `babelBoilerplateOptions`

#### I want to change the destination file name or directory

1. Update `main` in `package.json`

#### I want to change what variable my module exports

`MyLibrary` is the name of the variable exported from this boilerplate. You can change this by following
these steps:

1. Ensure that the variable you're exporting exists in your scripts
2. Update the value of `exportVarName` in `package.json` under `babelBoilerplateOptions`
3. Check that the unit tests have been updated to reference the new value

#### I don't want to export a variable

When prompted for the name of the library's main variable, leave the response empty.

#### My library depends on an external module

Install the module and use it in your scripts like usual. Then, go into the Gulpfile and
add the [`externals`](https://webpack.github.io/docs/configuration.html#externals) to the
Webpack build options.

If you want to access the module itself in your unit test files, you will need to set up the
test environment to support the module. To do this:

1. Load the module in the [test setup file](https://github.com/babel/generator-babel-boilerplate/blob/master/test/setup/setup.js).
2. Add any imported variables to globals object in the
[test globals JSON](https://github.com/babel/generator-babel-boilerplate/blob/master/test/setup/.globals.js).
