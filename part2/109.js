function isPrime(number) {


    for (i = 2; i < number; i++) {

        if (number % i == 0) {

            return false;
        }
    }

    return true;

}

for (let i = 1; i <= 19; i++) {

    if (isPrime(i)) {

        console.log(i)
    }

}




