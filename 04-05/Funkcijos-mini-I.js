console.log('labas');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Pirma uzduotis');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');

function suma(a, b) {
    return a+b
}

console.log(suma(1, 5));
console.log(suma(77, 5));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Antra uzduotis');
function palyginimas(a, b) {
    if (a > b) {
        return 'pirmasis skaicius yra didesnis uz antraji'
    } else if (a < b) {
        return 'pirmasis skaicius yra mazesnis uz antraji'
    } else {
        return 'abu skaiciai yra lygus'
    }
}

console.log(palyginimas(1, 5));
console.log(palyginimas(77, 5));
console.log(palyginimas(7, 7));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Trecia uzduotis');

function keliamieji(m) {
    for (let index = 1; index <= m; index++) {
        if ((index % 100) === 0) {
            if ((index % 400) === 0) {
                console.log(`${index} metai yra keliamieji`);
            } else {continue};
        }
        if (((index % 4) === 0)) {
            console.log(`${index} metai yra keliamieji`);
        }
    }
}

console.log(keliamieji(401));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Ketvirta uzduotis');
function kvadratu(a) {
    let kvadratas = (a * a);
    return kvadratas;
}

console.log(kvadratu(0));
console.log(kvadratu(4));
console.log(kvadratu(21));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Penkta uzduotis');

function sumaIki(a) {
    if (a <= 1) {
        return 'skaicius turi buti didesnis uz 1';
    }
    let f = 0;
    for (let index = 1; index <= a; index++) {
        f += index;
    }
    return f;
};

console.log(sumaIki(1));
console.log(sumaIki(2));
console.log(sumaIki(9));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Sesta uzduotis');

function dalinasiIs(a) {
    let f = 0
    for (let index = 2; index < a; index++) {
        if ((a % index) !== 0) {
            continue
        } else {
            f++
        }
    }
    return f;
}

console.log(dalinasiIs(4));
console.log(dalinasiIs(12));