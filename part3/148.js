function swapArray(n1) {


    for (i = 0; i < n1.length / 2; i++) {

        var temp = n1[i];
        n1[i] = n1[(n1.length / 2) + i];
        n1[(n1.length / 2) + i] = temp;

    }

    console.log(n1)


}

swapArray([34, 5, 9, 44, 4, 6]);