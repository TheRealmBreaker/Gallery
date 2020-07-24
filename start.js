var path = require('path');
var express = require('express');
var app = express();

var http = require('http');
var fs = require('fs');

app.use('/public', express.static('public'));

app.get('/', function (req, res) {

    fs.readFile('./index.html', null, function(error, data){
        if (error) {
            res.writeHead(404);
            res.write('404 Not Found.');
        } else {
            res.write(data);
        }
        res.end();
    })
}).listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});

app.get('/characters', function (req, res){

    app.use(express.static("resources"));

    
    fs.readFile('./index.html', null, function(error, data){
        if (error) {
            res.writeHead(404);
            res.write('404 Not Found.');
        } else {
            res.write(data);
        }
        
        res.end();
    })

});

app.get('/characters/path', function (req, res){

    app.use(express.static("resources"));
    
    fs.readFile('./resources/json/charPaths.json', null, function (error, data){
        if(error){
            res.writeHead(404);
            res.write('404 Not Found.');
        } else {
            var parseData = JSON.parse(data);
            console.log(parseData);
            res.json(parseData);
        }
    });

    //res.end();

});

function makeJsonPathFile(){
    let imgList = new Array();

    let i = 0;

    fs.readdirSync("./resources/characters/").forEach (file => {
        
        imgList.push(file);
        imgList[i] = "/characters/"+imgList[i];
        i++;
    });

    var jsonFile = JSON.stringify(imgList);
    fs.writeFile('./resources/json/charPaths.json', jsonFile, function(err){
        if(err) throw err;
    });
};




// http.createServer(function (req, res) {

    
//     var requrl = req.url;
    
//     if(req.url == "/style.css"){
//         res.writeHead(200, {'Content-Type': 'text/css'});
//         fs.readFile('./style.css', null, function(error, data){
//             if (error) {
//                 res.writeHead(404);
//                 res.write('File not found!');
//             } else {
//                 res.write(data);
//             }
//             res.end();
//         })
//     }
//     else {
//     switch (requrl){
//         case "/videos":
//             res.end("videos here");
//             break;
//         case "/images":
//             res.end("images here");
//             break;
//         case "/about":
//             res.end("about here");
//             break;
//         default:
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             fs.readFile('./index.html', null, function(error, data){
//                 if (error) {
//                     res.writeHead(404);
//                     res.write('File not found!');
//                 } else {
//                     res.write(data);
//                 }
//                 res.end();
//             })
//         }
//     }
// }).listen(8080);

// console.log("Server started at port 8080.");
