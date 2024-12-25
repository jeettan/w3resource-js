function circle(x, y, r, a, b) {

    var top = y + r;
    var bottom = y - r;
    var right = x + r;
    var left = x - r;

    if ((a > left && a < right) && (b < top && b > bottom)) {

        console.log("Within the circle");

    } else {

        console.log("Outside the circle");
    }

}

circle(3, 5, 2.5, 4, 3);

