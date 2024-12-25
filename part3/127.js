function reverseBit(input) {

    var res = numbToBit(input);
    res = reversebit(res);
    res = bitToDecimal(res);

    return res;
}

function numbToBit(numb) {

    let array = [];

    while (numb > 0) {

        var remainder = numb % 2;
        array.push(remainder);
        numb = Math.floor(numb / 2);

    }

    array = array.reverse();
    var length = array.length;
    var zero = 8 - length;

    for (i = 0; i < zero; i++) {

        array.unshift("0");

    }

    return array.join('')
}

function reversebit(bit) {

    return bit.split('').reverse().join('');
}

function bitToDecimal(bit) {

    bit = bit.split('').reverse();

    var sum = 0;

    for (i = 0; i < bit.length; i++) {

        var x = Math.pow(2, i) * bit[i];
        sum += x;
    }

    return sum;
}

console.log(reverseBit(14));
console.log(reverseBit(56));
console.log(reverseBit(234));



