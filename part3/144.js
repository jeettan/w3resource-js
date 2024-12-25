function parts(website) {

    let res = website.split('//')

    var protocol = res[0];

    var domain = res[1].split(".com");

    return [protocol, domain[0], domain[1]];

}

console.log(parts("https://www.w3resource.com/javascript-exercises/"))