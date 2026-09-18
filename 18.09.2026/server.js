let http = require('http');
let fs = require("fs")
const server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('Strona Główna');
    } else if (req.url == "/json") {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end(JSON.stringify({ message: "Strona z JSON" }));
    } else if (req.url == "/prostyhtml") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        res.end('<h1>Hello World</h1>');
    } else if (req.url == "/plikhtml") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        res.end(fs.readFileSync('index.html'));
    }
})

server.listen(8080, () => {
    console.log("chodzi");
})

