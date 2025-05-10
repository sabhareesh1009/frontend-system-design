const express = require("express");
const bodyParser = require("body-parser");
const { join } = require("node:path");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "/index.html"));
});


app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write("data: welcome to server sent events!\n\n");

  const intervalId = setInterval(() => {
    res.write(`data: server time ${new Date().toLocaleDateString()}\n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
  });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
