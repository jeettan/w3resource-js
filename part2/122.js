function increase(input) {

    console.log(input)

    var set = 0;

    for (i = 0; i < input.length - 1; i++) {

        if (input[i] < input[i + 1]) {
            set = 1;
            continue;
        } else {
            set = 2;
            break;
        }
    }

    if (set == 1) {

        return "increasing sequence";
    }

    if (set == 2) {

        for (i = 0; i < input.length - 1; i++) {

            if (input[i] > input[i + 1]) {
                set = 2;
                continue;
            } else {
                set = 3;
                break;
            }
        }

    }

    if (set == 2) {

        return "decreasing sequence";
    } else if (set == 3) {

        return "random sequence"
    }

}

console.log(increase([3, 4, 6]))
console.log(increase([2, 4, 6]))
console.log(increase([9, 5, 2]))

