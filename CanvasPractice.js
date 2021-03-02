function changeColor() {
    var divElement1 = document.getElementById("case1");
    var divElement2 = document.getElementById("case2");

    divElement1.className="hotpinkback";
    divElement2.className="blackback";
}

function doRed() {
    var divElement1 = document.getElementById("case1");
    divElement1.style.backgroundColor = "red";
    var context = divElement1.getContext("2d");
    context.clearRect(0,0,divElement1.width,divElement1.height);
}

function doBlue() {
    var divElement1 = document.getElementById("case1");
    divElement1.style.backgroundColor = "blue";
    var context = divElement1.getContext("2d");

    context.fillStyle = "green";
    context.fillRect(10,10,60,60);
    context.fillRect(80,10,60,60);

    context.fillStyle = "black";
    context.font="20px Arial";
    context.fillText("Hello", 15, 45);
}

function doColor() {
    var canvas = document.getElementById("case2");
    var colorInput = document.getElementById("colorChange");
    canvas.style.backgroundColor = colorInput.value;
}

function doSquare() {
    var sliderinput = document.getElementById("slider");
    var len = sliderinput.value;
    var canvas = document.getElementById("case2");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width, canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(10, 10, len, len);
    context.fillRect(parseInt(len)+20,10,len,len);
    context.fillRect(len*3,10,len,len);
}

