const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let data = "Intial todos!";

app.get("/todos", (req, res) => {
  res.send({ data });
});

app.get("/updateTodo", (req, res) => {
  const updatedData = "Updated todos!";
  data = updatedData;
  res.send({ data  });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
