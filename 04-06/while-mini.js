console.log('labas');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Pirma uzduotis');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
let suma = 0;
while (suma<100) {
    suma += Math.floor(Math.random() * 11);
    console.log(suma);
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Antra uzduotis');
suma = Math.floor(Math.random() * 11);
console.log(suma);
while (suma % 7) {
    suma += Math.floor(Math.random() * 11);
    console.log(suma);
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Ketvirta uzduotis');
let a = 0;
while (a != 5) {
    a = Math.floor(Math.random() * 11);
    console.log(a);
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Penkta uzduotis');
let b = 0;
let c = 0;
while (b != 5 && b != 7) {
    b = Math.floor(Math.random() * 11);
    c++;
    console.log(b);
}
console.log(`prireike ciklu: ${c}`);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Trecia uzduotis');
let ks = 17;
let ps = 0;
let d = 0;
while (ps < ks) {
    d++;
    ps += d;
}
console.log('Visa knyga perskaitys per:', d);
console.log('Vidutiniskai per diena perskaitys', (ks/d));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Trecia uzduotis');

function skyriuPerskaitymas(x) {
    let visoSkyriu = x;
    let perskaiteSkyriu = 0;
    let dienu = 0;
    let vidSkyriu = 0;
    while (perskaiteSkyriu < visoSkyriu) {
        dienu++;
        perskaiteSkyriu += dienu;
    } 
    vidSkyriu = (x/dienu).toFixed(1);
    console.log('Visa knyga perskaitys per:', dienu);
    console.log('Vidutiniskai per diena perskaitys', vidSkyriu);
}

skyriuPerskaitymas(8);
skyriuPerskaitymas(17);
skyriuPerskaitymas(87);
