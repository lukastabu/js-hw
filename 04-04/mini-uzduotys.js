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