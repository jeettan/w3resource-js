function reverse(input) {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    input = input.split('');
    var res = []

    for (i = 0; i < input.length; i++) {

        if (input[i].toLowerCase() == input[i]) {

            var flip = 25 - alphabet.indexOf(input[i]);
            res.push(alphabet[flip]);
            console.log(input[i], ":", alphabet[flip]);

        } else {

            res.push(input[i])
        }

    }

    return res.join('');

}

console.log(reverse("python"))