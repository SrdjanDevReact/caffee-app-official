"use strict";
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
//Confriguration
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
//middleware
app.use(cors());
// socket.io stuff
io.on("connection", (socket) => {
  console.log("New Client Connected");
  socket.on("orderPlaced", (idOfTable) => {
    console.log("Order placed from table: ", idOfTable);
    io.emit("orderPlacedSocketServer", idOfTable);
  });
  socket.on("orderTaken", (tableId) => {
    console.log("Emmiter tableId:", tableId);
    io.emit("orderTakenSocketServer", tableId);
  });
  socket.on("orderDelivered", (tableId) => {
    console.log("Emmiter tableId:", tableId);
    io.emit("orderDeliveredSocketServer", tableId);
  });
  socket.on("cleanTable", (tableId) => {
    console.log("Table to delete:", tableId);
    io.emit("cleanTableSocketServer", tableId);
  });
});
//Run the server
const PORT = 5000;
server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
