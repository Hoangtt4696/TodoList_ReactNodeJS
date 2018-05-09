var express = require('express');
var router = express.Router();

let TodoList =  {items: [
    {
        "userId": 1,
        "id": "1",
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": "2",
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": "3",
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": "4",
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": "5",
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    }]}
;

router.get('/todos', function (req, res){
    console.log(TodoList);
  res.json(TodoList);
});

router.post('/todos', function (req, res){
  TodoList.items.push(req.body);
  res.json(TodoList);
});

router.put('/todos/:id', function (req, res){
    for (let i = 0; i< TodoList.items.length; i++){
        if(TodoList.items[i].id === req.params.id)
            TodoList.items[i] = req.body;
    }
    res.json(TodoList);
});

router.delete('/todos/:id', function (req, res){
    TodoList.items = req.body;
    for (let i = 0; i< TodoList.items.length; i++){
        if(TodoList.items[i].id === req.params.id)
            TodoList.items.splice(i, 1);
    }
  res.json(TodoList);
});

module.exports = router;
