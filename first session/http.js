const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Hello User");

  if (req.url === "/api/user") {
    res.write("Hello User, welcome to the website");
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log("new connection is connected");
});

server.listen(8080);
