const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/turtles") {
    res.writeHead(200, {
      "Content-Type": "application/JSON",
    });
    res.end(JSON.stringify({ id: 1, name: "Box Turtle" }));
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
