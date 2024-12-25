function countEven(number) {

    let count = 0;


    for (i = 1; i < number; i++) {

        if (i % 2 == 0) {

            count++
        }
    }

    return count;

}

console.log(countEven(34))


