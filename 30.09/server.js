let http = require('http');
let fs = require("fs")
const url = require("url")
const mime = require("mime-types");
const server = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
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
    }else if(parsedUrl.pathname === '/get_params'){ 
        
        const headers = JSON.stringify(parsedUrl.query);
        const title ='params_' + Date.now() + '.json';

        fs.writeFileSync(title,headers,'utf-8')
        res.end()
    }else{
        try {
    let adres = `assets${req.url}`;

    //console.log("ADRES:", adres);

    let plik = fs.readFileSync(adres);

    let mimeType = mime.contentType(adres.split('.').pop());


    res.writeHead(200, {
        "Content-Type": mimeType
    });

    res.end(plik);

} catch (error) {
    res.writeHead(404, {
        "Content-Type": "application/json; charset=utf-8"
    });

    res.end(JSON.stringify({
        404: "Path not found"
    }));
}
    }
})

server.listen(8080, () => {
    console.log("chodzi");
})