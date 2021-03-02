/*
function dochange() {
    alert('you clicked me');
}
*/
function dochange() {
    var txt;
    var r = confirm("Press a button!");
    if(r == true) {
        txt = "You pressed ok!";
    } else {
        txt = "Are you sure want to cancel?";
    }
}

function changeColor() {
    var divElement1 = document.getElementById("case1");
    var divElement2 = document.getElementById("case2").style.backgroundColor = "blue";
    divElement1.className = "redback";
    //divElement2.className = "blueback";
}

function changeText() {
    var divElement1 = document.getElementById("case1");
    var divElement2 = document.getElementById("case2");
    divElement1.innerHTML="CLICK ME NOW!";
    divElement2.innerHTML="STUPID HUMAN!";
}
