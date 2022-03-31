console.log('Pirmas uzdavinys');
let n = 0;
console.log(n);

if (n < 0) {
    console.log('Blogas');
} else if (n > 0) {
    console.log('Geras');
    }
    else (
        console.log('Nei geras, nei blogas')
    );

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Antras uzdavinys');
console.log(n=2);
if (n===1) {
    console.log('Eiti');
} else {console.log('Palaukti');
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Trecias uzdavinys');

n = 5;
let d = 3;
let k = 15;
if ((n*d)>=k) {
    console.log('Knygos telpa i dezes');
} else { console.log('Knygos netelpa i dezes');
};

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Ketvirtas uzdavinys');

let a = 16;
let b = 15;

if (a>b) {
    --a; ++b;
} else if ( a<b) {
    ++a; --b;
} else {
    console.log('ne viena reiksme nera nei didesne, nei mazesne uz kita')
};

console.log(a);
console.log(b);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Penktas uzdavinys');
let c = 139;
let p = 20;

let porcijos = Math.floor(c/p);
let likutis = c - (p*porcijos);
console.log(`Saulius nusipirks ${porcijos} porcijas, liks ${likutis} centu`);
