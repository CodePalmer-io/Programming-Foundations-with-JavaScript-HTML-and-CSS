function upload() {
    var imgcanvas = document.getElementById("myCanvas");
    var fileinput = document.getElementById("fileInput");
    var image = fileinput.src = URL.createObjectURL(this.files[0]);

}

var x = null;
function myFunction() {
    var x = 2;
}

myFunction();
if(x == null) {
   console.log("x is null");
} else {
    console.log("x is 2");
}