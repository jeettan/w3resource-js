function prefixSum() {

    var input = 1;
    var prefix = 1;

    for (i = 0; i < 9; i++) {

        console.log("Input", input)
        console.log("Prefix", prefix)
        input++;
        prefix = input + prefix;

    }
}

prefixSum();