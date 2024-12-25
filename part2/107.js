function divisearray(array) {

    var james = [];

    for (i = 0; i < array.length; i++) {

        for (j = i + 1; j < array.length; j++) {


            if (array[i] % array[j] == 0 || array[j] % array[i] == 0) {

                console.log(array[i], array[j])

                var k = [array[i], array[j]]

                james.push(k);

            }
        }
    }

    console.log(james)
}

divisearray([2, 4, 6])
divisearray([1, 3, 2])
divisearray([2, 4, 16])



