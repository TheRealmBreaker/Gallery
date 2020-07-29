function addViewObject(toColumn){

    var col1 = document.getElementById(toColumn);
    var img = document.createElement("div");
    img.className = "imageDiv";
    
        let x = document.createElement("img");
        x.className = "imageObject";
        x.src = "/characters/1.jpg";
        x.alt = "JS div added";

    img.appendChild(x);

    col1.appendChild(img);
}

function getJson(){

    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open ("GET", "http://localhost:8080/characters/path", true);
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            console.log(xmlhttp);
        }
    }
    xmlhttp.send();
};

function populateColumns(){
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