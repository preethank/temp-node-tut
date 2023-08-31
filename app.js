const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write("Hi Preethu");
    res.end();
})

server.listen(5000);