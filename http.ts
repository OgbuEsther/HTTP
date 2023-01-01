// // console.log("hello");

// import http, { ServerResponse, RequestListener, IncomingMessage } from "http";
// const port: number = 3022;

// //the typeof of req is Incoming Message
// // the typeof res is serverResponse <Incoming message>
// const app = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.writeHead(200);
//     res.write("server is running");
//     res.end();
//   }
// );

// app.listen(port, () => {
//   console.log(`istening to port ${port}`);
// });

// import http, { IncomingMessage, ServerResponse } from "http";
// const port: number = 3002;

// const server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.writeHead(200);
//     res.write("server is up and running");
//     res.end();
//   }
// );

// server.listen(port, () => {
//   console.log(`reading to port ${port}`);
// });

// import http, { IncomingMessage, ServerResponse } from "http";

// const PORT = 2004;
// const app = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.writeHead(404);
//     res.write("just created my first server");
//     res.end();
//   }
// );

// app.listen(PORT, () => {
//   console.log(`just created port ${PORT}`);
// });

// import http, { IncomingMessage, ServerResponse } from "http";
// const Port = 4004;

// const Server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.writeHead(202);
//     res.write("reading server ooooo!!!!! , if e easy do am now 😎😎😎😎😎😎😎");
//     res.end();
//   }
// );

// Server.listen(Port, () => {
//   console.log(`reading port ${Port} `);
// });
// import http from "http";
// console.log(http.STATUS_CODES);
