console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Astunta uzduotis');
function coliaiCm(n) {
    for (let index = 1; index <= n; index++) {
        console.log(`${index} coliai yra ${(index*2.54)}cm`);
    };
};

console.log(coliaiCm(1));
console.log(coliaiCm(7));
console.log(coliaiCm(11));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Devinta uzduotis');
function Indel(m) {
    let indelis = 100;
    palukanos = 0;
    for (let index = 1; index <= m; index++) {
        indelis += (indelis*1.02)-indelis;
        indelis = Math.round(indelis*100)/100;
        palukanos = indelis-100;
        palukanos = Math.round(palukanos*100)/100;
        console.log(`po ${index} metu indelis bus ${indelis}e, is kurio palukanu ${palukanos}e`);
    }
};

console.log(Indel(1));
console.log(Indel(2));
console.log(Indel(10));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Desimta uzduotis');

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