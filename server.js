const data = require('./data');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cookieParser())

let currentPath = 'harris';
let currentStep = 0;
let currentResults = [0, 0, 0];

app.set('view engine', 'ejs');

app.get('/present', (req, res) => {
  const currentData = data[currentPath][currentStep];
  if (currentData.resetResults) {
    currentResults = [0, 0, 0];
  }

  res.render(currentData.presentTemplate, { ...currentData, results: currentResults });
});

app.get('/', (req, res) => {
  if (!req.cookies.name) {
    res.render('new-player');
    return;
  }
  const currentData = data[currentPath][currentStep];
  res.render(currentData.mobileTemplate, currentData);
});

io.on('connection', socket => {
  let i = 0;
  setInterval(() => socket.emit('test', i++), 1000);

  socket.on('next', () => {
    currentStep++;
    io.emit('reload');
  });

  socket.on('choice', i => {
    currentResults[i]++;
    console.log(currentResults);
  })
});

server.listen(8080);
