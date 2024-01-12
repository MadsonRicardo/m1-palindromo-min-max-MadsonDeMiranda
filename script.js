function isPalindrome(str) {

    const stringFormatada = str.toLowerCase().replace(/\s/g, '');
    let stringRetornadaInverso = '';

    for (let i = stringFormatada.length - 1; i >= 0; i--) {

        stringRetornadaInverso = stringRetornadaInverso + stringFormatada[i];

    }

    if (stringRetornadaInverso === stringFormatada) {

        return true;

    } else {

        return false;

    }

}

// isPalindrome('A mala nada na lama')

function arrayMaxMin(arr) {

    let maiorNumero = arr[0];
    let menorNumero = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (maiorNumero <= arr[i]) {

            maiorNumero = arr[i];

        } else if (menorNumero >= arr[i]) {

            menorNumero = arr[i];

        }
    }

    return [menorNumero, maiorNumero];
}


// arrayMaxMin([5, 3, 15, 25, 50, 0, 2, 8, 1]);