var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var path = require('path');

var app = express();

app.set('port', 3030);

app.set('root', path.resolve('build'));

app.use(morgan('dev'));
app.use(parser.json());

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.static(app.get('root')));

app.post('/login', function (req, res, next) {
  const exampleUser = {
    token: 'jwt_token', //TODO: look into past tokens: https://github.com/paragonie/past
    roles: ['Admin'],
    email: 'user@user.com',
    name: 'Iam Auser'
  }
  res.json(exampleUser);
});

app.listen(app.get('port'), '0.0.0.0', function(err){
  if (err) {
    console.error('Error connecting server', err);
    return process.exit(1);
  }
  console.info('==> 🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', app.get('port'), app.get('port'));
});

['SIGINT', 'SIGTERM'].forEach(signal => {
  process.on(signal, () => {
    console.log(`Captured ${signal}! Exiting.`);
    process.exit();
  });
});
