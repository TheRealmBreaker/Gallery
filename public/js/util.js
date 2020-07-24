function addViewObject(){



    var view = document.getElementById("rightViewport");
    var img = document.createElement("div");
    img.className = "imageDiv";
    
        let x = document.createElement("img");
        x.className = "imageObject";
        x.src = "/public/img/img1.png";
        x.alt = "JS div added";

    img.appendChild(x);

    view.appendChild(img);
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