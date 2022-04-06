console.log('labas');
console.log('xxxxxxxxxxxxxxxxxxxxxx');
console.log('FUNKCIJOS');
console.log('xxxxxxxxxxxxxxxxxxxxxx');
console.log('Antra uzduotis');
console.log('xxxxxxxxxxxxxxxxxxxxxx');

function daugyba(a, b) {
    if (typeof a !== 'number') {
        return 'pirma reiksme nera skaicius';
    }
    if (isNaN(a)) {
        return 'pirma reiksme nera tikras skaicius';
    }
    if (typeof b !== 'number') {
        return 'antra reiksme nera skaicius';
    }
    if (isNaN(b)) {
        return 'antra reiksme nera tikras skaicius';
    }
    return a*b;   
}

console.log(daugyba(7, 5));
console.log(daugyba('du', 5));
console.log(daugyba(7, ''));
console.log(daugyba(NaN, ''));
console.log(daugyba(7, NaN));

console.log('xxxxxxxxxxxxxxxxxxxxxx');
console.log('Trecia uzduotis: Funkcija pavadinimu “skaitmenuKiekisSkaiciuje"');
console.log('xxxxxxxxxxxxxxxxxxxxxx');

function numSize(number) {
    if (typeof number !== 'number'
//    || isNaN                  padengia !isFinite salyga
//    || number === Infinity
//    || number === -Infinity
    || !isFinite(number)) {
    return 'pateikta netinkamo tipo reiksme'
    }
    let numberZodis = "" + number;
    let size = numberZodis.length;
    if (number % 1 !== 0) {
        size--
    }
    if (numberZodis.includes('-')) {
        size--
    }
    return size;
}

console.log(numSize(5), '-->', 1);
console.log(numSize(0), '-->', 1);
console.log(numSize(-5), '-->', 1);
console.log(numSize(781), '-->', 3);
console.log(numSize(3.14), '-->', 3);
console.log(numSize(-3.14), '-->', 3);
console.log(numSize(0.001), '-->', 3);
console.log(numSize(1234567890123456789012345), '-->', 22);
console.log(numSize(1e29), '-->', 2);
console.log(numSize(true), '-->', 'pateikta netinkamo tipo reiksme');
console.log(numSize('abc'), '-->', 'pateikta netinkamo tipo reiksme');
console.log(numSize(NaN), '-->', 'pateikta netinkamo tipo reiksme');
console.log(numSize(Infinity), '-->', 'pateikta netinkamo tipo reiksme');
console.log(numSize(-Infinity), '-->', 'pateikta netinkamo tipo reiksme');

console.log('xxxxxxxxxxxxxxxxxxxxxx');
console.log('Ketvirta uzduotis: Funkcija pavadinimu "didziausiasSkaiciusSarase"');
console.log('xxxxxxxxxxxxxxxxxxxxxx');

function biggestNum(list) {
    if (typeof list !== 'object') {
        return 'Pateiktas sarasas yra netinkamo tipo';
    }
    if (list.length === 0) {
        return 'Pateiktas sarasas negali buti tuscias'    
    }
    
    let bn = -Infinity;


    for (let index = 0; index < list.length; index++) {
        const number = list[index];
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
        if (number >  bn) {
            bn = number;
        }
    }
    if (bn === -Infinity) {
        return 'Pateiktas sarasas yra begalybe'
    }
    return bn;
}

console.log(biggestNum([1]), '-->', 1);
console.log(biggestNum([1, 2, 2]), '-->', 3);
console.log(biggestNum([-1, 10, 78, 0]), '-->', 78);
console.log(biggestNum([69, 69, 69, 66]), '-->', 69);
console.log(biggestNum([-1, -8, -2, -3]), '-->', -1);
console.log(biggestNum([]), '-->', 'Pateiktas sarasas negali buti tuscias');
console.log(biggestNum('Zodis'), '-->', 'Pateiktas sarasas yra netinkamo tipo');

console.log('xxxxxxxxxxxxxxxxxxxxxx');
console.log('Penkta uzduotis: Funkcija pavadinimu "isrinktiRaides"');
console.log('xxxxxxxxxxxxxxxxxxxxxx');

function letters(text, step) {
    if (typeof text !== 'string') {
        return 'Tekstas yra neteisingo formato'
    }
    if (text.length === 0) {
        return 'Tekstas negali buti tuscias'
    }

    if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra neteisingo formato'
    }
    if (!isFinite(step)) {
        return 'Antrasis kintamasis yra netikras skaicius'
    }
    if (step % 1 !==0) {
        return 'Antrasis kintamasis turi buti sveikasis skaicius'
    }
    if (step === 0) {
        return 'Antrasis kintamasis negali buti 0'
    }
    if (step > text.length) {
        return 'Antrasis kintamasis negali buti didesnis uz teksto ilgi'
    }

    let raides = "";
    if (step > 0) {
        for (let index = step-1; index < text.length; index+=step) {
        let raide = text[index];
        raides += raide;
        }
     } else {
        for (let index = text.length + step ; index >= 0; index += step) {
        let raide = text[index];
        raides += raide;
        }
    }
    return raides;
}

console.log(letters('abcdefg', 2), '-->', 'bdf');
console.log(letters('abcdefghijkl', 3), '-->', 'cfil');
console.log(letters('abcdefghijklmnopqrsutxwyz', -2), '-->', 'yxur...b');
console.log(letters("", 2), '-->', "Tekstas negali buti tuscias");
console.log(letters(1234, 2), '-->', 'Tekstas nera teisingo formato');
console.log(letters('abccc', 0), '-->', 'Antrasis kintamasis negali buti 0');
console.log(letters('abccc', 'abc'), '-->', 'Tekstas yra neteisingo formato');
console.log(letters('abccc', Infinity), '-->', 'Antrasis kintamasis yra netikras skaicius');
console.log(letters('abccc', NaN), '-->', 'Antrasis kintamasis yra netikras skaicius');
console.log(letters('abccc', 1.5), '-->', 'Antrasis kintamasis turi buti sveikasis skaicius');
console.log(letters('abccc', 8), '-->', 'Antrasis kintamasis negali buti didesnis uz teksto ilgi');