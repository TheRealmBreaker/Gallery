var path = require('path');
var express = require('express');
var app = express();

var http = require('http');
var fs = require('fs');

app.use('/public', express.static('public'));
app.use(express.static("resources"));

app.get('/', function (req, res) {

    var index = '404 Not Found.';
    makeJsonPathFile();

    fs.readFile('./resources/html/nav.html', 'utf8', function(error, data){
        if (error) {
            res.writeHead(404);
            res.write(index);
            res.end();
            
        } else {

        

        index = data;

        fs.readFile('./resources/html/chars.html', 'utf8', function(error, data){
            if(error) {
                res.writeHead(404);
                res.write('view not found');
                res.end();
            } else {
                index += data;


                res.write(index);
            }
            res.end();
            console.log('Index~');
        });
    }
})

    

    

}).listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});

app.get('/character', function (req, res){
    
    var index = '404 Not Found.';

    fs.readFile('./resources/html/nav.html', 'utf8', function(error, data){
        if (error) {
            res.writeHead(404);
            res.write(index);
            res.end();
            
        } else {

        index = data;
        fs.readFile('./resources/html/chars.html', 'utf8', function(error, data){
            if(error) {
                res.writeHead(404);
                res.write('view not found');
                res.end();
            } else {
                index += data;
    
                res.write(index);
            }
            res.end();
            console.log('Characters~');
        });
        }
    })

});




app.get('/lifedrawing', function (req, res){

    
    var index = '404 Not Found.';

    fs.readFile('./resources/html/nav.html', 'utf8', function(error, data){
        if (error) {
            res.writeHead(404);
            res.write(index);
            res.end();
            
        } else {

        index = data;

        fs.readFile('./resources/html/lifedraw.html', 'utf8', function(error, data){
            if(error) {
                res.writeHead(404);
                res.write('view not found');
                res.end();
            } else {
                index += data;
    
                res.write(index);
            }
            res.end();
            console.log('Life Drawings~');
        });
        }
    })    

});


app.get('/video', function (req, res){
    
    var index = '404 Not Found.';

    fs.readFile('./resources/html/nav.html', 'utf8', function(error, data){
        if (error) {
            res.writeHead(404);
            res.write(index);
            res.end();
            
        } else {

            index = data;

            fs.readFile('./resources/html/video.html', 'utf8', function(error, data){
                if(error) {
                    res.writeHead(404);
                    res.write('view not found');
                    res.end();
                } else {
                    index += data;
        
                    res.write(index);
                }
                res.end();
                console.log('Animations~');
            });
        }
    })

});

app.get('/background', function (req, res){

   

    
    var index = '404 Not Found.';

    fs.readFile('./resources/html/nav.html', 'utf8', function(error, data){
        if (error) {
            res.writeHead(404);
            res.write(index);
            res.end();
            
        } else {

            index = data;

            fs.readFile('./resources/html/back.html', 'utf8', function(error, data){
                if(error) {
                    res.writeHead(404);
                    res.write('view not found');
                    res.end();
                } else {
                    index += data;
        
                    res.write(index);
                }
                res.end();
                console.log('Backgrounds~');
            });
        }
    })

});

app.get('/modelling', function (req, res){

    

    
    var index = '404 Not Found.';

    fs.readFile('./resources/html/nav.html', 'utf8', function(error, data){
        if (error) {
            res.writeHead(404);
            res.write(index);
            res.end();
            
        } else {

            index = data;

            fs.readFile('./resources/html/models.html', 'utf8', function(error, data){
                if(error) {
                    res.writeHead(404);
                    res.write('view not found');
                    res.end();
                } else {
                    index += data;
        
                    res.write(index);
                }
                res.end();
                console.log('3D Models~');
            });
        }
    }) 

});


app.get('/about', function (req, res){

    

    
    var index = '404 Not Found.';

    fs.readFile('./resources/html/nav.html', 'utf8', function(error, data){
        if (error) {
            res.writeHead(404);
            res.write(index);
            res.end();
            
        } else {
            index = data;

            fs.readFile('./resources/html/about.html', 'utf8', function(error, data){
                if(error) {
                    res.writeHead(404);
                    res.write('view not found');
                    res.end();
                } else {
                    index += data;
        
                    res.write(index);
                }
                res.end();
                console.log('About~');
            });
        }
    })    

});

/* image manifest */
app.get('/manifest', function (req, res){

    
    
    fs.readFile('./resources/json/manifest.json', null, function (error, data){
        if(error){
            res.writeHead(404);
            res.write('404 Not Found.');
        } else {
            var parseData = JSON.parse(data);
            res.json(parseData);
        }
    });

    //res.end();

});




function makeJsonPathFile(){

    let imgList = [[],[],[],[]];

    fs.readdirSync("./resources/characters/").forEach (file => {
        
        imgList[0].push("/characters/"+file);
        
    });

    
    fs.readdirSync("./resources/lifepics/").forEach (file => {
        
        imgList[1].push("/lifepics/"+file);

    });

    
    fs.readdirSync("./resources/backgrounds/").forEach (file => {
        
        imgList[2].push("/backgrounds/"+file);

    });

    
    fs.readdirSync("./resources/models/").forEach (file => {
        
        imgList[3].push("/models/"+file);
    });

    var jsonFile = JSON.stringify(imgList);
    fs.writeFile('./resources/json/manifest.json', jsonFile, function(err){
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
