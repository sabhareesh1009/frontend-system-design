const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection",(socket) => {
  console.log("connection established");
  socket.on("chat message",(msg) => {
    console.log(msg); 
    io.emit("chat message",msg);
  })

  socket.on("disconnect",() => {
    console.log("user disconnected!");
  })
})
const PORT = 5111;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
