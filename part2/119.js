function increase(input) {

    input = String(input).split('');

    console.log(input)

    for (i = 0; i < input.length - 1; i++) {

        if (input[i] < input[i + 1]) {
            continue;
        } else {
            console.log("Fail..")
            return false;
            break;
        }
    }

    console.log("Pass");
    return

}

increase(346)
increase(243)


