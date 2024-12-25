function parts(n) {

    var start = 0;

    for (i = 1; i <= n; i++) {

        start += Math.pow(i, 3);
    }

    console.log(start)

}


parts(5)
