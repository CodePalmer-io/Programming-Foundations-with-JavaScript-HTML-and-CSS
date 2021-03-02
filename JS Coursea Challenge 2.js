/*
Write a JavaScript function named swapRedGreen with one parameter pixel (representing a single pixel).
 This function should swap the red and green values of the pixel. For example,
 if you have a pixel with red = 255, green = 100, blue = 150, after calling swapRedGreen on that
 pixel its new RGB values would be red = 100, green = 255, blue = 150.

var img = new SimpleImage("smallhands.png");
print(img);

function swapRedGreen(x) {
    var swapGreen = x.getGreen();
    var swapRed = x.getRed();
    x.setRed(swapGreen);
    x.setGreen(swapRed);
}

for( var x of img.values()) {
    swapRedGreen(x);
}
print(img);

 */