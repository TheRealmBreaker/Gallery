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