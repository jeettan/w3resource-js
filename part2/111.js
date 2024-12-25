function unique(number, number2, number3) {

    if (number == number2) {

        return number3
    } else if (number == number3) {

        return number2
    } else if (number2 == number3) {

        return number
    } else {

        return "no equal numbers"
    }

}

console.log(unique(99, 3, 99));




