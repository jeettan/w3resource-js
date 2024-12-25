function failTry(array) {

    var permutate = 5;
    var array1 = [];

    for (i = 1; i < permutate; i++) {

        array1.push(i);
    }

    array = array.sort();

    console.log(JSON.stringify(array1));

    if (JSON.stringify(array) == JSON.stringify(array1)) {

        console.log("Array match")
    } else {

        console.log("Array not matching")
    }

}


failTry([1, 3, 2, 4]);

