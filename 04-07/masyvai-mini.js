console.log('labas');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Pirma uzduotis');
console.log(Array.from({length: 40}, () => 1 + Math.floor(Math.random() * 20)));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Antra uzduotis');
let rnd = 40 + Math.floor(Math.random() * 21);
console.log(rnd);
console.log(Array.from({length: rnd}, () => 1 + Math.floor(Math.random() * rnd)));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Trecia uzduotis');
rndlength = 10 + Math.floor(Math.random() * 6);
console.log(rndlength);
let masyvas3 = Array.from({length: rndlength}, () => 5 + Math.floor(Math.random() * 43));
console.log(masyvas3);
let didziausias = 0;
for (let index = 0; index < masyvas3.length; index++) {
    if (masyvas3[index] > masyvas3[index-1]) {
        didziausias = masyvas3[index];
    }
}
console.log(didziausias);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Ketvirta uzduotis');
let defgh =  Array.from({length: 100}, () => 1 + Math.floor(Math.random() * 5));
newdefgh = [];
let dcount=0;
let ecount=0;
let fcount=0;
let gcount=0;
let hcount=0;

for (let index = 0; index < defgh.length; index++) {
    if (defgh[index] === 1) {
        newdefgh.push('d');
        dcount++;
    } else if (defgh[index] === 2) {
        newdefgh.push('e');
        ecount++;
    } else if (defgh[index] === 3) {
        newdefgh.push('f');
        fcount++;
    } else if (defgh[index] === 4) {
        newdefgh.push('g');
        gcount++;
    } else if (defgh[index] === 5) {
        newdefgh.push('h');
        hcount++;
    }   
}
console.log(defgh);
console.log(newdefgh);
console.log('d raidziu:', dcount, 'e raidziu:', ecount, 'f raidziu:', fcount, 'g raidziu:', gcount, 'h raidziu', hcount);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Sesta uzduotis');
let m6 = [];
while (m6.length < 20) {
    let reiksme = 10 + Math.floor(Math.random() * 41)
    if (m6.indexOf(reiksme) == -1) {
        m6.push(reiksme);
    }
}

console.log(m6);