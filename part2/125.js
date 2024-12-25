function longestString(string) {

    var longest = string[0].length;
    var answer = string[0]

    for (i = 0; i < string.length; i++) {

        if (string[i].length > longest) {

            longest = string[i].length
            answer = string[i];
        }
    }

    return answer;

}

console.log(longestString(["string", "jeet tan", "stringyaskjdlsjk"]))