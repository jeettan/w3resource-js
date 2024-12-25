function replacefirst(k) {

    k = k.toString().split('');

    k[0] = '$';

    k = k.join('')

    console.log(k)

}

replacefirst(34)