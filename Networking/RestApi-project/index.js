const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.all("/", (req, res) => {
  res.send("Iam Up!");
});

const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Description 2",
    completed: false,
  },
];

// READ
app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json({
    message: "Todo created successfully",
  });
});

// READ
app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todo.title = title;
  todo.description = description;
  todo.completed = completed;
  res.json({
    message: "Todo updated successfully",
  });
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todos.splice(todos.indexOf(todo), 1);
  res.json({
    message: "Todo deleted successfully",
  });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
