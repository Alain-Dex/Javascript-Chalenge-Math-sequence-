/*This is a Javascript Challenge. We are try to select from the sequences given to us whether which
is Arithmetic and which is Geometric*/

function mathSequence(arr) {

    let arith = new Set();
    let geo = new Set();

    for (let i = 1; i < arr.length; i++) {
        let number1 = arr[i]- arr[i - 1];
        arith.add(number1);
        let number2 = arr[i] /arr[i - 1];
        geo.add(number2);

    }
    if ( arith.size ===1 ){
        return 'ARITHMETIC';
    }
    if ( geo.size ===1 ){
        return 'GEOMETRIC';
    }
    return '-1';

}

console.log(mathSequence([2, 4, 6, 8]));
console.log(mathSequence([3, 9, 27, 81]));