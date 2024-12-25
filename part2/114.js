function correctsentence(string) {

    if ((string[string.length - 1] == ".") && (string[0] == string[0].toUpperCase())) {

        console.log("Correct sentence")
    } else {

        console.log("incorrect sentence")
    }


}

correctsentence("Hello world.")