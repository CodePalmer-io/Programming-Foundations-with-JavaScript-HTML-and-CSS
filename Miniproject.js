let myImage = null;
let fileInput;
let grayscale;
let redscale;
let negativescale;
let rainbowscale;
let blurscale;
let blankImage;
let canvas;

function upload() {
    fileInput = document.getElementById("imageFile");
    myImage = new SimpleImage(fileInput);
    redscale = new SimpleImage(fileInput);
    negativescale = new SimpleImage(fileInput);
    rainbowscale = new SimpleImage(fileInput);
    blurscale = new SimpleImage(fileInput);
    grayscale = new SimpleImage(fileInput);
    canvas = document.getElementById("myCanvas");
    myImage.drawTo(canvas);
}


function testImageLoad() {
    if(myImage == null || ! myImage.complete()) {
        alert("Image did not load");
    } else {
        return true;
    }
}
function grayScaleFilter() {
    for(var pixel of grayscale.values()) {
        var avgPixel = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avgPixel);
        pixel.setGreen(avgPixel);
        pixel.setBlue(avgPixel);
    }
}

function grayFilter() {
    if(testImageLoad(grayscale)) {
        grayScaleFilter();
        grayscale.drawTo(canvas);
    }
}

function redScaleFilter() {
    for (var pixel of redscale.values()) {
        var avgPixel = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if(avgPixel < 128) {
            pixel.setRed(avgPixel * 2);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen((avgPixel * 2) - 255);
            pixel.setBlue((avgPixel * 2) - 255);
        }
    }
}
function redFilter() {
    if(testImageLoad(redscale)) {
        redScaleFilter();
        redscale.drawTo(canvas);
    }
}

function negativeScaleFilter() {
    for (var pixel of negativescale.values()) {
        var r = 255 - pixel.getRed();
        var g = 255 - pixel.getGreen();
        var b = 255 - pixel.getBlue();

        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
    }
}

function negativeFilter() {
    if(testImageLoad(negativescale)) {
        negativeScaleFilter();
        negativescale.drawTo(canvas);
    }
}

function rainbowScaleFilter() {
    let verticalAspectRatio;
    let avgPixel;
    let partitionY = rainbowscale.getHeight() / 7;

    for(let pixel of rainbowscale.values()) {
        verticalAspectRatio = pixel.getY();
        avgPixel = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (verticalAspectRatio <= partitionY) {                                            //RED
            if (avgPixel < 128) {
                pixel.setRed(avgPixel * 2);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen((avgPixel * 2) - 255);
                pixel.setBlue((avgPixel * 2) - 255);
            }
        } else if (verticalAspectRatio > partitionY && verticalAspectRatio <= (partitionY * 2)) {        //ORANGE
            if (avgPixel < 128) {
                pixel.setRed(avgPixel * 2);
                pixel.setGreen(avgPixel * 0.8);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen((avgPixel * 1.2) - 51);
                pixel.setBlue((avgPixel * 2) - 255);
            }
        } else if (verticalAspectRatio > (partitionY * 2) && verticalAspectRatio <= (partitionY * 3)) { //Yellow
            if (avgPixel < 128) {
                pixel.setRed(avgPixel * 2);
                pixel.setGreen(avgPixel * 2);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue((avgPixel * 2) - 255);
            }
        } else if (verticalAspectRatio > (partitionY * 3) && verticalAspectRatio <= (partitionY * 4)) { //Green
            if (avgPixel < 128) {
                pixel.setRed(0);
                pixel.setGreen(avgPixel * 2);
                pixel.setBlue(0);
            } else {
                pixel.setRed((avgPixel* 2) - 255);
                pixel.setGreen(255);
                pixel.setBlue((avgPixel * 2) - 255);
            }
        } else if (verticalAspectRatio > (partitionY * 4) && verticalAspectRatio <= (partitionY * 5)) { //Blue
            if (avgPixel < 128) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(avgPixel * 2);
            } else {
                pixel.setRed((avgPixel * 2) - 255);
                pixel.setGreen((avgPixel * 2) - 255);
                pixel.setBlue(255);
            }
        } else if (verticalAspectRatio > (partitionY * 5) && verticalAspectRatio <= (partitionY * 6)) { //Indigo
            if (avgPixel < 128) {
                pixel.setRed(avgPixel * 0.8);
                pixel.setGreen(0);
                pixel.setBlue(avgPixel * 2);
            } else {
                pixel.setRed((avgPixel * 1.2) - 51);
                pixel.setGreen((avgPixel * 2) - 255);
                pixel.setBlue(255);
            }
        } else if (verticalAspectRatio > (partitionY * 6) && verticalAspectRatio <= (partitionY * 7)) { //Violet
            if (avgPixel < 128) {
                pixel.setRed(avgPixel * 1.6);
                pixel.setGreen(0);
                pixel.setBlue(avgPixel * 1.6);
            } else {
                pixel.setRed((avgPixel * 0.4) + 153);
                pixel.setGreen(0);
                pixel.setBlue((avgPixel * 0.4) + 153);
            }
        }
    }
}


function rainbowFilter() {
    if(testImageLoad(rainbowscale)) {
        rainbowScaleFilter();
        rainbowscale.drawTo(canvas);
    }
}


function blurscaleFilter() {
    for (let pixel of blurscale.values()) {
        let x = pixel.getX();
        let y = pixel.getY();
        if (Math.random() > 5) {
            let randomPixel = getPixelNearby(blurscale, x, y, 10);
            blankImage.setPixel(x, y, randomPixel);
        } else {
            blankImage.setPixel(x, y, pixel);
        }
    }
    blankImage.drawTo(canvas);
}


function getPixelNearby(image, x, y, diameter) {
    let dx = Math.random() * diameter - (diameter / 2);
    let dy = Math.random() * diameter - (diameter / 2);
    let imageX = checkImage(x + dx, image.getWidth());
    let imageY = checkImage(y + dy, image.getHeight());
    return image.getPixel(imageX, imageY);
}

function checkImage(coordinate, size) {
    if (coordinate < 0) {
        return 0;
    }
    if (coordinate >= 0) {
        return size-1;
    }
    return coordinate;
}

function blurFilter() {
    blankImage = new SimpleImage(blurscale.getWidth(), blurscale.getHeight());
    if(testImageLoad(blurscale)) {
        blurscaleFilter();
    }
}

function Reset() {
    upload();
    return;
}


