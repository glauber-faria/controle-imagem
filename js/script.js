function getBlur(){
    var x = document.getElementById("blur").value;
    document.getElementById("imagem").style.filter = "Blur("+x+"px)";
}
function getBrightness(){
    var x = document.getElementById("brightness").value;
    document.getElementById("imagem").style.filter = "Brightness("+x+"%)";
}
function getContrast(){
    var x = document.getElementById("contrast").value;
    document.getElementById("imagem").style.filter = "contrast("+x+"%)";
}
function getGrayscale(){
    var x = document.getElementById("grayscale").value;
    document.getElementById("imagem").style.filter = "grayscale("+x+"%)";
}
function getHueRotate(){
    var x = document.getElementById("hueRotate").value;
    document.getElementById("imagem").style.filter = "hue-rotate("+x+"deg)";
}
function getSaturate(){
    var x = document.getElementById("saturate").value;
    document.getElementById("imagem").style.filter = "saturate("+x+"%)";
}
function getSepia(){
    var x = document.getElementById("sepia").value;
    document.getElementById("imagem").style.filter = "sepia("+x+"%)";
}
function getOpacity(){
    var x = document.getElementById("opacity").value;
    document.getElementById("imagem").style.opacity = x/100;
    console.log(x/100)
}