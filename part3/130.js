function evenDigits(input) {

    var k = input.toString().split('');
    var count = 0;

    for (j in k) {

        if (j % 2 == 0) {

            count++;
        }
    }

    return count;
}

console.log(evenDigits(34));