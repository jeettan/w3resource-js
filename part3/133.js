function fraction(input) {

    var k = input.split('/');

    k = k.map((n) => Number(n));

    if (k[0] > 0 && k[1] > 0) {

        if (k[0] < k[1]) {

            console.log("Proper")

        } else if (k[0] > k[1]) {

            console.log("Improper")
        }


    } else {

        console.log("Non-positive fraction")
    }



}

fraction("5 / 4"); //improper
fraction("6 / 9"); //proper
fraction("2 / 4");