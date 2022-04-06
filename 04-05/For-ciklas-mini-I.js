console.log('labas');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Pirma uzduotis');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');

for (let index = 0; index < 5; index++) {
    console.log('labas');
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Antra uzduotis');

for (let index = 0; index < 5; index++) {
    console.log(index);
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Trecia uzduotis');
for (let index = 0; index < 5; index++) {
    console.log(index*10);
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Ketvirta uzduotis');
for (let index = 49; index < 54; index++) {
    console.log(index);
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Penkta uzduotis');
for (let index = 0; index < 5; index++) {
    console.log(Math.floor(Math.random() * 11));
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Sesta uzduotis');
for (let index = 1; index <= 20; index++) {
    if ((index % 3) === 0) {
        continue
    } else {
        console.log(index);
    };
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Septinta uzduotis');

function daugyba(n) {
    for (let index = 1; index <= 10; index++) {
        console.log(`${n} x ${index} = ${(n*index)}`);
    };
}

console.log(daugyba(1));
console.log(daugyba(7));
console.log(daugyba(11));

