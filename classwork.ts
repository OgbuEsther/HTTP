import http from "https";
import fs from "fs";
import path, { posix } from "path";
import stream from "stream";
import { IncomingMessage, ServerResponse } from "http";
const URL: string = "https://fakestoreapi.com/products";
const port = 2002;
const app = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    const { method, url, statusCode } = req;
    if (method === "GET" && url === "/" && res.statusCode === 200) {
      http.get(URL, (res) => {
        let data = "";
        let pix = new stream.Transform();

        res.on("data", (chunk) => {
          data += chunk.toString("utf-8");
          // image.push(chunk);
        });

        res.on("end", () => {
          let results = JSON.parse(data);
          let value: number = Math.floor(Math.random() * results.length);
          let result = results[value].image;
          console.log(result);
          // console.log(data);

          if (result.statusCode === 200) {
            http.get(result, (res) => {
              res.on("data", (chunk) => {
                pix.push(chunk);
              });
              console.log("getting pix");

              res.on("end", () => {
                let name = Date.now();
                let file = path.join(__dirname, "/image", `${name}.jpg`);

                console.log("reading pix");

                fs.writeFileSync(file, pix.read());
              });
            });
          } else {
            console.log("wrong");
          }
        });
      });
    }
  }
);

app.listen(port, () => {
  console.log(`reading port ${port}`);
});

// import http, { IncomingMessage, Server, ServerResponse } from "http";

// const port = 3022;

// let data = [
//   { id: 1, name: "esther", stack: "full stack" },
//   { id: 2, name: "delight", stack: "half stack" },
//   { id: 3, name: "esther", stack: "mern stack" },
// ];

// let mydata = "i am ready to punch";
// const server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     if (req.method === "GET" && req.url === "/" && res.statusCode === 200) {
//       res.setHeader("content-type", "application/json");
//       res.write(JSON.stringify(data));
//       res.write(mydata);
//       res.end();
//     }
//     res.end();
//   }
// );

// server.listen(port, () => {
//   console.log(`reading port ${port}`);
// });
