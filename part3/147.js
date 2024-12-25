function digitSum(n) {

    var sum = 0;

    n = n.toString().split('');

    n = n.map((x) => Number(x));

    n.forEach((x) => {

        sum += x;

    })

    console.log(sum)

}


digitSum(39)
