function sameDigit(numb) {

    numb = numb.toString().split('');

    y = numb.filter((x) => x == numb[0]);

    if (JSON.stringify(y) !== JSON.stringify(numb)) {

        console.log("Not same number")
    } else {

        console.log("All same number")
    }

}


console.log(sameDigit(1111));