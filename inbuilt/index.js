let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res) => {
    fs.readFile('db.json','utf-8',(err,data) => {
        if(err) throw err;
        res.write(data);
        res.end();
    })
})


