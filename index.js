// const http = require("http");
// const port = 2022;

// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.write("server is up and running 😋😎😍");
//   res.end("done");
// });

// server.listen(port, () => {
//   console.log(`listening to port ${port}`);
// });

const http = require("http");

const PORT = 2020;

const app = http.createServer((req, res) => {
  res.writeHead(404);
  res.write("create a server 😁😁");
  res.end();
});

app.listen(PORT, () => {
  console.log(`port ${PORT} has been created`);
});
