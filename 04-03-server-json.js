//Exercise Downloaded:
// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   console.log("request received");

//   response.statusCode = 200;

//   response.setHeader("Content-Type", "application/json");

//   const jsonResponseBody = JSON.stringify({ location: "Earth" });

//   response.end(jsonResponseBody);
// });

// server.listen(3000, () => {
//   console.log(`Server running at http://localhost:3000`);
// });
const http = require('http');

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader = ("Content-Type", "application/json");
    const JSONResBody = JSON.stringify({ location: "Mars" });

    res.end(JSONResBody);
})

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});

