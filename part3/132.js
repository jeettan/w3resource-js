function distinctFactor(input) {

    var x;
    var y;

    for (i = input - 1; i > 0; i--) {

        if (input % i == 0) {

            x = i;
            break;
        }
    }

    for (i = 0; i <= input; i++) {

        if (x * i == input) {

            y = i;
            break;
        }
    }

    if (!isPrime(x)) {

        x = distinctFactor(x);

    }

    if (!isPrime(y)) {

        y = distinctFactor(y);
    }


    return [x, y];

}

function isPrime(number) {

    for (i = 2; i < number; i++) {

        if (number % i == 0) {

            return false;
        }
    }

    return true;

}

console.log(distinctFactor(99))