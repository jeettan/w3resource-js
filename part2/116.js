function hash(string) {

    var hash = '#'
    var divisible = 3;
    var result = [];

    for (i = 0; i < 10; i++) {

        hashed = string.replace(hash, i);

        if (hashed % 3 == 0) {

            result.push(hashed)

        }

    }

    console.log(result)


}

hash("2#0")
hash("4#2")
