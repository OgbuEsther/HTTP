// // let num: number = 2;
// // if (num < 1) {
// //   console.log("number is less than one");
// // } else {
// //   console.log("number is greater than one");
// // }

// // //switch case

// // switch (num < 1) {
// //   case num > 1:
// //     console.log("number is greater than one");

// //     break;

// //   default:
// //     console.log("number is lesser than one");
// //     break;
// // }

// import http, { IncomingMessage, ServerResponse } from "http";
// const port = 2023;

// const app = http.createServer(
//   (
//     req: http.IncomingMessage,
//     res: http.ServerResponse<http.IncomingMessage>
//   ) => {
//     // console.log(req.method, req.url);
//     // res.writeHead(200);
//     res.setHeader("content-type", "text/html");
//     res.write("<h1>server is up</h1>");
//     res.end();

//     // if (req.method === "POST") {
//     //   console.log("this is the post route");
//     // } else {
//     //   console.log("NO POST");
//     // }
//   }
// );

// app.listen(port, () => {
//   console.log(`listening to port ${port}`);
// });
import fs from "fs";
import path from "path";
import http, { IncomingMessage, ServerResponse } from "http";
const port = 2004;

const app = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    // res.setHeader("content-type", "text/html");
    //

    let viewpages: string = "PAGES/";
    switch (req.url) {
      case "/":
        viewpages += "home.html";
        res.statusCode = 200;
        break;

      case "/about.html":
        viewpages += "about.html";
        res.statusCode = 200;
        break;

      case "/contact.html":
        viewpages += "contact.html";
        res.statusCode = 200;
        break;

      case "/services.html":
        viewpages += "services.html";
        res.statusCode = 200;
        break;

      case "/callus":
        viewpages += "services.html";
        res.setHeader("Location", "/contact");
        res.statusCode = 301;
        break;

      default:
        viewpages += "404.html";
        res.statusCode = 404;
        break;
    }

    fs.readFile(path.join(__dirname, viewpages), (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
    // res.write("<h1>server is up</h1>");
    // res.end();
  }
);
app.listen(port, () => {
  console.log(`reading port ${port}`);
});
