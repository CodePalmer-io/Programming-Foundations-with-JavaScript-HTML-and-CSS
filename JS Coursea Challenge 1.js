/*
 Write a JavaScript program that modifies an image by putting three vertical stripes on it -
 a red stripe on the left one third, a green stripe in the middle, and a blue stripe on the
 right one third. For example, if your program ran on Drew’s picture shown on the left,
 the resulting image would have red, green and blue vertical stripes as shown in the image
 on the right.

var img = new SimpleImage("rodger.png");
print(img);

for (var pixel of img.values()) {
    if (pixel.getX() <= img.getWidth() / 3)
    {
        pixel.setRed(255);
    }
    else if (pixel.getX() >= img.getWidth() / 3 && pixel.getX() <= img.getWidth() * (2/3))
    {
        pixel.setBlue(255);
    }
    else
        pixel.setGreen(255);
}

print(img);

 */