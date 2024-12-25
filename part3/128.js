function smallestRound(x, y) {

    var first = countround(x);
    var second = countround(y);

    if (first > second) {

        console.log(`${x} is rounder than ${y}`)
    } else if (second > first) {

        console.log(`${y} is rounder than ${x}`)
    } else if (first == 0 && second == 0) {

        console.log("Both values have no round numbers")
    }


}

function countround(numb) {

    numb = numb.toString().split('')
    var count = 0;

    for (i = numb.length; i > 0; i--) {

        if (numb[i - 1] == 0) {

            count++;

        } else if (numb[i - 1] != '0') {

            break;
        }
    }

    return count;

}

function nearest_round_number(num) {
    // Loop until the number is divisible by 10
    while (num % 10) {
        // Increment the number by 1 until it is divisible by 10
        num++;
    }
    // Return the nearest round number
    return num;
}



smallestRound(590, 600)

console.log(nearest_round_number(34))