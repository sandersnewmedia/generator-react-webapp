var opbeat = require('opbeat').start()
var express = require('express');
var fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true});
var helmet = require('helmet');

require('node-jsx').install({ extension: '.jsx' });
require('babel-core/register')({});

var manifest;
if (process.env.NODE_ENV !== 'development') {
  manifest = JSON.parse(fs.readFileSync('dist/manifest.json'));
} else {
  manifest = {
    'bundle.js': 'bundle.js',
    'bundle.css': 'bundle.css'
  };
}
var server = express();

if (process.env.NODE_ENV !== 'development') {
  server.use(helmet.hsts({
    maxAge: 10886400000,
    includeSubdomains: true,
    force: true
  }));
  server.use(helmet.xssFilter())
  server.use(helmet.frameguard())
  server.use(helmet.hidePoweredBy())
}

server.use('/assets', express.static(path.join(__dirname, 'dist')));
server.use(bodyParser.json());
server.use(cookieParser());

server.use(opbeat.middleware.express());

server.set('views', __dirname + '/src/views');
server.set('view engine', 'jade');

server.get("*", function(req, res) {
  return res.render('index', {
    bundlePath: '/assets/' + manifest[process.env.BUNDLE],
    cssPath: '/assets/' + manifest[process.env.CSS_BUNDLE],
    csrf: req.csrfToken && req.csrfToken()
  });
});

var port = process.env.PORT;
server.listen(port, function() {
  console.log('listening on port ' + port);
});
