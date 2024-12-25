function largestEven(array) {

    var largest = 0;

    for (item of array) {

        if (item > largest && item % 2 == 0) {

            largest = item

        }
    }

    console.log(largest)

}


largestEven([99, 4, 5, 96]);