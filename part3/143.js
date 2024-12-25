function Length(array) {

    return array.sort((a, b) => a.length - b.length);
}

console.log(Length(["Gayson mr jeet", "Bob", "Great"]));