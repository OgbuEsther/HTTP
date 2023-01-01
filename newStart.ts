import http, { IncomingMessage, Server, ServerResponse } from "http";

const port = 3022;

let data = [
  { id: 1, name: "esther", stack: "full stack" },
  { id: 2, name: "delight", stack: "half stack" },
  { id: 3, name: "esther", stack: "mern stack" },
];

let mydata = "i am ready to punch";
const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    if (req.method === "GET" && req.url === "/" && res.statusCode === 200) {
      res.setHeader("content-type", "application/json");
      res.write(JSON.stringify(data));
      res.write(mydata);
      res.end();
        }
    else if (req.method === "GET" && req.url === "/" && res.statusCode === 200) {
        http.request()
        }
          res.end();
  }
);

server.listen(port, () => {
  console.log(`reading port ${port}`);
});
