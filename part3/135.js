function removeRepeat(gray) {

    gray = gray.split('');

    gray = gray.filter((item, index) => gray.indexOf(item) === index);

    console.log(gray.join(''))

}

removeRepeat("String");