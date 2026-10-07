const express = require('express')
const fs = require('fs');
//var mime = require('mime-types')
const path = require('node:path')


const app = express();

app.get('/j', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  //res.send('Strona główna');
  res.end('strona glowna');
})
app.get('/d', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify({Hello: 'World!'}));
  res.end();
})
app.get('/t', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Hello world</h1>');
})
app.get('/c', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  let file = fs.readFileSync("./index.html");

  res.end(file);
})
app.get('/get_params', (req, res) => {
    let params = req.query;
    console.log(params);
    res.end(JSON.stringify(params));

    let timestamp = Date.now();
    fs.writeFileSync(`params_${timestamp}.json`, JSON.stringify(params));
    res.end(JSON.stringify(params));
})
app.use(express.static(path.join(__dirname, 'assets')));



app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
