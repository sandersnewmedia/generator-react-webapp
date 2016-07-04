'use strict';
var file = require('file');
var path = require('path');
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var _ = require('lodash');
var jsesc = require('jsesc');
var npmWhoami = require('npm-whoami');

function jsonEscape(str) {
  return jsesc(str, {quotes: 'double'});
}

module.exports = generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
    this.dirname = path.basename(this.destinationRoot());
    this.dirnameNoJs = path.basename(this.dirname, '.js');
    this.dirnameWithJs = this.dirnameNoJs + '.js';
  },

  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('React Webapp') + ' generator!'
    ));

    const gitName = this.user.git.name();
    const gitEmail = this.user.git.email();
    let defaultAuthor = gitName ? gitName : '';
    if (gitEmail) {
      defaultAuthor += ` <${gitEmail}>`;
    }

    var prompts = [{
      type: 'input',
      name: 'user',
      message: 'What is the Github username/organization for this project?',
      store: true
    }, {
      type: 'input',
      name: 'repo',
      message: 'What is the repository/project name?',
      // This default works when the directory was generated from a cloned
      // repository, or when the user intends to make a repo with the same
      // name as the directory. We assume this is the most common situation.
      default: this.dirname
    }, {
      type: 'input',
      name: 'description',
      message: 'What is a short description for this project?'
    }, {
      type: 'input',
      name: 'author',
      message: 'Who is the author of this project?',
      default: defaultAuthor,
      store: true
    }, {
      type: 'input',
      name: 'projectname',
      message: 'What is the name of the project?',
      default: _.camelCase(this.dirnameNoJs)
    }];

    var self = this;
    return self.prompt(prompts)
      .then(function(props) {
        self.user = jsonEscape(props.user);
        self.repo = jsonEscape(props.repo);

        // A good candidate for the module name is the directory, which we assume
        // to be derived from the repository name, stripped of any `.js` extension.
        // The extension is stripped per the "tips" section of the npm docs:
        // https://docs.npmjs.com/files/package.json#name
        self.moduleName = jsonEscape(self.dirnameNoJs.toLowerCase());

        // The mainFile, on the other hand, must always have an extension. Once
        // again we derive this from the name of the directory.
        self.fileName = jsonEscape(self.dirnameWithJs.toLowerCase());

        self.description = jsonEscape(props.description);
        self.author = jsonEscape(props.author);
        self.projectname = props.projectname;
      });
  },

  writing: {
    app: function() {
      var self = this;
      self.directory(self.templatePath('src'), self.destinationPath('src'));
      self.directory(self.templatePath('test'), self.destinationPath('test'));

      self.fs.copyTpl(self.templatePath('_package.json'),
            self.destinationPath('package.json'), self);

      self.fs.copyTpl(self.templatePath('server.js'),
            self.destinationPath('server.js'), self);

      self.template('.env', '.env')

      self.fs.copyTpl(self.templatePath('README.md'),
            self.destinationPath('README.md'), self);

      self.fs.copyTpl(self.templatePath('webpack.config.js'),
            self.destinationPath('webpack.config.js'), self);

      self.fs.copyTpl(self.templatePath('webpack.prod.config.js'),
          self.destinationPath('webpack.prod.config.js'), self);
    }
  },

  install: function() {
    this.installDependencies({
      bower: false,
      npm: true,
      skipInstall: this.options['skip-install']
    });
  }
});
