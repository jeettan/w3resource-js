function adjacentSwap(array) {

    array = array.toString().split('');


    if (array.length % 2 != 0) {
        return false;
    }

    for (i = 0; i < array.length; i = i + 2) {

        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    }


    return array.join('')
}

console.log(adjacentSwap(15));
console.log(adjacentSwap(1234));
console.log(adjacentSwap(123456));
console.log(adjacentSwap(12345));

