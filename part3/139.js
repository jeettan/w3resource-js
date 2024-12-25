function countround(numb) {

    numb = numb.toString().split('')
    var count = 0;

    for (i = numb.length; i > 0; i--) {

        if (numb[i - 1] == 0) {

            return i - 1;

        } else if (numb[i - 1] != '0') {

            return 0;
        }
    }

}


console.log(countround(3300));