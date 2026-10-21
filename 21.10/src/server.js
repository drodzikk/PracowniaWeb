import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import bodyParser from "body-parser"
const app = express();
const port = 3000;
//server.listen(8080);
app.use('/static', express.static(path.dirname(fileURLToPath(import.meta.url)) + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

let getPath = function(name){
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const _retfile = path.join(__dirname, name);
    return _retfile;
}
app.get('/', (req, res) => {
    let file = getPath("index.html");
    res.sendFile(file);
});
app.get('/o-nas', (req, res) => {
    let file = getPath("o-nas.html");
    res.sendFile(file);
});

app.get('/oferta', (req, res) => {
    let file = getPath("oferta.html");
    res.sendFile(file);
});
app.get('/kontakt', (req, res) => {
    let file = getPath("kontakt.html");
    res.sendFile(file);
});
app.post('/kontakt', (req, res) => {
    const data = req.body;
    //console.log(data.imie);
    console.log(req.body.imie+","+ req.body.nazwisko+","+ req.body.email+","+ req.body.tresc);
    let file = getPath("index.html");
    res.sendFile(file);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});