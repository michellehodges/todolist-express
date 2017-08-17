const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');

const server = express();
const todos = [
  { todo: "Wash the car", complete: false, id: 0 },
  { todo: "Feed the dog", complete: false, id: 1 },
  { todo: "Run around the block", complete: true, id: 2 }];


server.engine('mustache', mustache());
server.set('views', './views');
server.set('view engine', 'mustache');

server.use(bodyparser.urlencoded({ extended: false }));

server.get("/", function(req, res) {
  res.render('index', {
    todoList: todos,
  });
});

let counter = 4;

server.post('/', function(req, res) {
  counter += 1;
  todoList.push({
    item: req.body.item,
    complete: false,
    id: counter
  })

})


server.post("/:id", function(req, res) {
  for (let i = 0; i < todoList.length; i++) {
    if (parseFloat(todoList[i].id === parseFloat(req.params.id) {
      todoList[i].complete = true;
    }))
  }
  res.render('index', {todoList: todos})
})

server.listen(3000, function() {
  console.log('We aboutta do this todo list thing!');
});
