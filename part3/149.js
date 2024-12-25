function swapArray(string) {


    var x = string.split('');

    for (y in x) {

        if (x[y].toUpperCase() == x[y]) {

            x[y] = x[y].toLowerCase();

        } else if (x[y].toLowerCase() == x[y]) {

            x[y] = x[y].toUpperCase();
        }
    }

    return x.join('')

}

console.log(swapArray("Great job"));