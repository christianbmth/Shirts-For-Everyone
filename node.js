const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

function requireLogin(req, res, next) {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
}
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'cristi' && password === 'tricouri') {
    req.session.loggedIn = true;
    res.redirect('/');
  } else {
    res.send('Autentificare eșuată!');
  }
});
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    }
    res.redirect('/login');
  });
});
app.get('/', requireLogin, (req, res) => {
  res.sendFile(__dirname + '/shirts-for-everyone.html');
});
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(5000, () => {
  console.log('Serverul merge cu portul 5000');
});
