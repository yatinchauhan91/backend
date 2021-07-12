const http = require("http");
const express = require("express");
const port = 8080;

const app = express();

require("./loaders/index")(app);

const server = http.createServer(app);

server.listen(port, () => {
  console.log("Server running on " + port);
});