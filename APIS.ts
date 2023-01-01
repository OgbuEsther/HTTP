import http from "https";
// console.log(http);
import fs from "fs";
import path from "path";
import stream from "stream";

const URL: string = "https://fakestoreapi.com/products";

const URL1: string =
  "https://api.nasa.gov/planetary/apod?api_key=ejoUrQgSTMr1xsVViAQckclkw5z2wHbIya1Te11s";

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
