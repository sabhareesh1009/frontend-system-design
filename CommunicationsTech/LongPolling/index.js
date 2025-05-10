const express = require("express");
const bodyParser = require("body-parser");

const app = express();


let data = "Intial todos";
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let waitingList = [];
app.get("/todos", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    waitingList.push(res);
  }
});

app.get("/updateTodo", (req, res) => {
  data = req.query.lastData;
  while (waitingList.length > 0) {
    const client = waitingList.pop();
    client.json({ data });
  }
  res.send({ success: "Data updated successfully!" });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
