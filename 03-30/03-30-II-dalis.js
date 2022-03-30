console.log('Sestas uzdavinys');
let n = 29;

if (n%3==0) {
    console.log('Trikampi sudelioti galima');
} else {console.log('Trikampio sudelioti negalima'); }

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Septintas uzdavinys');

let dienos = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
n=2;
console.log(dienos[n-1]);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Astuntas uzdavinys');
let k = 6;
if (k % 2 ==0) {
    console.log('Kambari tvarkys vyresnelis');
} else {
    console.log('Kambari tvarkys jaunelis');
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Devintas uzdavinys');

n = 0;
let m=2020;
n = (m-1896)/4;
if (n < 0) {
    console.log('Metai neolimpiniai');
} else {
    if (n - Math.floor(n) !== 0) {
        console.log('Metai neolimpiniai');
    } else {
        console.log(`n = ${n+1}`);
    }
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Desimtas uzdavinys');
let v1 = 8;
let m1 = 29;
let m2 = 100;
let v = 10;
m = 10;

let mPetro = m1 + m2;
let vPetro = v1;

while (mPetro > 60) {
    mPetro -= 60;
    vPetro++; 
}

console.log(vPetro);
console.log(mPetro);

if (vPetro > v) {
    console.log('Petras i pamoka paveluos');
} else {
    if (mPetro > m) {
        console.log('Petras i pamoka paveluos');
    }
    else {
        console.log('Petras i pamoka nepaveluos')
    }
}