function getViewObject(imagePath){

    
    var img = document.createElement("div");
    img.className = "imageDiv";
    
        let x = document.createElement("img");
        x.className = "imageObject";
        x.src = imagePath;
        x.alt = "JS div added";

    img.appendChild(x);
    return img;
}

function addToColumn(imgObj,col){
    document.getElementById(col).appendChild(imgObj);
}

function getImages(context){

    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open ("GET", "http://localhost:8080/manifest", true);
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            
            var paths = JSON.parse(this.responseText);
            

            switch (context){
                case "/characters/":
                    populateColumns(paths[0]);
                    break;
                case "/lifedrawing/":
                    populateColumns(paths[1]);
                    break;
                case "/backgrounds/":
                    populateColumns(paths[2]);
                    break;
                case "/models/":
                    populateColumns(paths[3]);
                    break; 
            }

        }
    }
    xmlhttp.send();
    
    
};

function populateColumns(paths){
    
    let i = 0;
    paths.forEach(path => {
        
        console.log(path);

        switch(i){
            case 0:
                addToColumn(getViewObject(path),"column1");
                i++;
                break;
            case 1:
                addToColumn(getViewObject(path),"column2");
                i++;
                break;
            case 2:
                addToColumn(getViewObject(path),"column3");
                i = 0;
                break;
        }


        
    });
}


/* test function */
function fillViewport(){
    addViewObject("column1");
    addViewObject("column1");
    addViewObject("column1");
    addViewObject("column1");
    addViewObject("column2");
    addViewObject("column2");
    addViewObject("column2");
    addViewObject("column2");
    addViewObject("column3");
    addViewObject("column3");
    addViewObject("column3");
    addViewObject("column3");
}

/* on document load */

document.addEventListener("DOMContentLoaded", function(event) { 

    document.getElementById("leftNav").style.height = window.innerHeight+"px";

    setTimeout(function (){
    console.log("document ready!");
    
    var docHeight = Math.max(
        document.getElementById("column1").scrollHeight,
        document.getElementById("column2").scrollHeight,
        document.getElementById("column3").scrollHeight,
        document.documentElement.scrollHeight
    );

    docHeight += 20;
    document.getElementById("wrapper").style.height = docHeight+"px";
    
    console.log(docHeight);


    },1000);
  });