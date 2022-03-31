console.log('labas');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Ciklas "for"');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Pirma uzduotis"');

let suma = 0;
for (let index = 0; index <= 0; index++) {
    suma += index;
}

console.log(suma);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');

suma = 0;
for (let index = 51; index <= 52; index++) {
    suma += index;
}

console.log(suma);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Antra uzduotis"');

let zodis = 'sula'; console.log(zodis);
let sidoz = ""
for (let index = zodis.length; index > 0; index--) {
    sidoz += zodis[index-1];
    console.log(sidoz);
};
console.log(sidoz);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Trecia uzduotis');
let dalinasi3 = 0;
let dalinasi5 = 0;
let dalinasi7 = 0;
let pirmas = 0;
let antras = 0;

function arDalinasi (pirmas, antras) {
for (let index = pirmas; index < antras; index++) {
    if (index % 3 == 0 ) {
    dalinasi3++
    };
    if (index % 5 == 0 ) {
        dalinasi5++
    }; 
    if (index % 7 == 0 ) {
        dalinasi7++
    };
}
console.log(`Skaičių intervale tarp ${pirmas} ir ${antras}, besidalijančių be liekanos iš 3 yra ${dalinasi3} vienetai.`);
console.log(`Skaičių intervale tarp ${pirmas} ir ${antras}, besidalijančių be liekanos iš 5 yra ${dalinasi5} vienetai.`);
console.log(`Skaičių intervale tarp ${pirmas} ir ${antras}, besidalijančių be liekanos iš 7 yra ${dalinasi7} vienetai.`);
dalinasi3 = 0;
dalinasi5 = 0;
dalinasi7 = 0;
};

arDalinasi(0, 11);
arDalinasi(8, 31);
arDalinasi(-18, 18);