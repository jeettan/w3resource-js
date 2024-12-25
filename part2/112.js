function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;

    }
    return res;
}

function trailingzero(n) {

    let x = factorial(n)

    var count = 0;

    while (x % 10 === 0 && x !== 0) {
        count++;
        x /= 10;
    }

    return count

}


console.log(trailingzero(15))




