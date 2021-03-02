/*
Write a function named setBlack that has one parameter pixel (representing a single pixel) and returns pixel with its
red, green, and blue components changed so that the pixel’s color is black.

Now you will write another function named addBorder. This function will add a black border
to an image, such as in the following example:

On the left, we have the original image, and on the right, we have modified the image by
giving it a black border that is 10 pixels thick. Note that the image size of the image
with the border is the same as the original image because the border is not added around the
outside of the original image, instead it covers up some of the original image.

Work through the seven steps to write this function. Work an example by hand and note the steps
you took before translating your algorithm to code.
Which pixels should be part of the border? How will you identify those pixels?
Once you have identified them, how will you make them black?

Hints:

The function will require two parameters: the image you want to modify,
and the thickness of the border. Remember that you can name parameters whatever you want,
but it is good to name them something informative. For example, in this case, you may want to use
names like image and thickness.

Remember that you wrote a setBlack function.

Remember that images have a getWidth() method and a getHeight() method.

After you have written the function, test it by calling it with different border thicknesses.
If anything is not working as expected, form a hypothesis about what is happening, gather
information, test your hypothesis, and fix the code.

var img = new SimpleImage("smallpanda.png");
print(img);

var xBound = img.getWidth()-10;
var yBound = img.getHeight()-10;

function setBlack(p) {
    p.setRed(0);
    p.setGreen(0);
    p.setBlue(0);
}

function addBorder(image, thickness) {
    for(var x of image.values()) {
        if (x.getX() <= thickness || x.getX()  >= xBound)
            setBlack(x);
        if (x.getY() <= thickness || x.getY() >= yBound)
            setBlack(x);
    }
}

addBorder(img, 10);
print(img);
 */