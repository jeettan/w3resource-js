var number = 17;

function isPrime(number) {


    for (i = 2; i < number; i++) {

        if (number % i == 0) {

            return false;
        }
    }

    return true;

}

for (let i = number + 1; ; i++) {

    if (isPrime(i)) {

        console.log(i)
        return;
    }

}




