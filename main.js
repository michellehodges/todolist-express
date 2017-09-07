const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');

const server = express();
const todos = [
  { title: "Wash the car", completed: false, id: 0 },
  { title: "Feed the dog", completed: false, id: 1 },
  { title: "Run around the block", completed: true, id: 2 }];


server.engine('mustache', mustache());
server.set('views', './views');
server.set('view engine', 'mustache');

server.use(bodyparser.urlencoded({ extended: false }));

server.get('/', function(req, res) {
  res.render('index', {
    todos: todos,
  });
});

let counter = 4;

server.post('/new', function(req, res) {
  counter += 1;
  todos.push({
    title: req.body.new,
    completed: false,
    id: counter
  })
  res.redirect('/');
})

server.post('/completed/:id', function(req,res) {
  const id = parseInt(req.params.id);

  for (let i = 0; i < todos.length; i++) {
    if (id === todos[i].id) {
      todos[i].completed = true;
    }
  }
  res.redirect('/');
})

server.listen(3000, function() {
  console.log('We aboutta do this todo list thing!');
});
