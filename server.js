const data = require('./data');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cookie = require('cookie');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cookieParser())
app.use('/static', express.static('static'))
app.use('/public', express.static('public'))

let currentPath = 'intro';
let currentStep = 0;

let results = {};

let allPlayers = new Set();
let isStarted = false;

app.set('view engine', 'ejs');

app.get('/present', (req, res) => {
  const currentData = data[currentPath].steps[currentStep];
  if (!results[currentPath]) {
    results[currentPath] = {};
  }

  if (!isStarted) {
    res.render('wait-for-players', { allPlayers });
    return;
  }

  res.render(currentData.presentTemplate, { ...currentData, results: results[currentPath], choices: data[currentPath].choices});
});

app.get('/', (req, res) => {
  if (!allPlayers.has(req.cookies.name)) {
    // have a list of all the players actually connected, check if the person connecting now has already sent an emit
    // if they haven't, send them to the new player page, even if they already have a cookie
    // only get in the list by clicking the submit button
    res.render('new-player');
    return;
  }

  if (!isStarted) {
    res.render('mobile-wait-for-players');
    return;
  }
  const currentData = data[currentPath].steps[currentStep];
  res.render(currentData.mobileTemplate, {...currentData, choices: data[currentPath].choices, currentStep});
  // ... means take everything in current data object and stick in new object, and also put in more stuff
});

io.on('connection', socket => {
  const cookies = socket.handshake.headers.cookie && cookie.parse(socket.handshake.headers.cookie);
  socket.on('new-player', name => {
    if (name && !isStarted && !allPlayers.has(name)) {
      allPlayers.add(name);
      io.emit('reload');
    }
  });

  socket.on('start', () => {
    isStarted = true;
    io.emit('reload');
  });

  socket.on('next', () => {
    currentStep++;
    io.emit('reload');
  });

  socket.on('back', () => {
    currentStep--;
    results[currentPath] = {};
    io.emit('reload');
  });

  socket.on('exit', () => {
    currentStep = 0;
    currentPath = 'intro';
    results = {};
    allPlayers = new Set();
    isStarted = false;
    io.emit('reload');
  });

  socket.on('adjudicate', () => {
    const allChoices = unique(Object.values(results[currentPath]));
    const randomIndex = Math.floor(Math.random() * allChoices.length);
    const randomChoice = allChoices[randomIndex];

    currentPath = data[currentPath].destinations[randomChoice];
    currentStep = 0;
    io.emit('reload');
  });

  socket.on('choice', i => {
    const currentResults = results[currentPath]
    currentResults[cookies.name] = i;

    const players = Object.keys(currentResults);

    console.log(currentResults);
    console.log(players);
    console.log(allPlayers);
    if (players.length === allPlayers.size) {
      const firstChoice = currentResults[players[0]];
      for (let i = 1; i < players.length; i++) {
        if (currentResults[players[i]] !== firstChoice) {
          currentStep++;
          io.emit('reload');
          return;
        }
      }

      currentPath = data[currentPath].destinations[firstChoice];
      currentStep = 0;
      io.emit('reload');
    }
  })
});

server.listen(80);

function unique(array) {
  return [...new Set(array)];
}
