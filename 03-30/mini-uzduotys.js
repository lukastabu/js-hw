console.log('labas');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Kintamuju inicijavimas');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');

const skaicius1 = 1;
console.log(skaicius1);

let skaicius2 = 1.5;
console.log(skaicius2);

var skaicius3 = 2*9;
console.log(skaicius3);

const zodis1 = 'Jonas';
console.log(zodis1);

let zodis2 = 'Darius ir Girenas';
console.log(zodis2);

var zodis3 = 'pravarde "Agurkas"';
console.log(zodis3);

const rezultatai1 = [1,2,3,4,5];
console.log(rezultatai1);

let rezultatai2 = [5,4,3,2,1];
console.log(rezultatai2);

var rezultatai3 = [0, 0.1, 0.5, 0.7, 0.99];
console.log(rezultatai3);

const fraze1 = ['labas rytas', 'laba diena', 'labas vakaras', 'laba naktis', 'kudie neatrasai'];
console.log(fraze1);

let fraze2 = ['šen bei ten', 'kur šuo pakastas', 'po šimts pypkių', 'kad jį kur galas', 'aš tau tu'];
console.log(fraze2);

var fraze3 = ['ji pasake "labas"', 'ko žiūri?', 'jis... tiesiog nepatikėjo', 'mes, jie, jūs; tik ne tu.', 'padarom 0,5 ir tada iškart dar po 50!'];
console.log(fraze3);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Veiksmai su kintamaisiais');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');

let suma = 0;
suma = (skaicius1 + skaicius2 + skaicius3)
console.log(suma);

let zodziai = (zodis1 + ' ' + zodis2 + ' ' + zodis3);
console.log(zodziai);

let skaiciavimas1 = (rezultatai1[0] - rezultatai1[1] + rezultatai1[2] - rezultatai1[3] + rezultatai1[4])
console.log(skaiciavimas1); 

let skaiciavimas2 = (rezultatai2[0] - rezultatai2[1] + rezultatai2[2] - rezultatai2[3] + rezultatai2[4])
console.log(skaiciavimas2); 

var skaiciavimas3 = (rezultatai3[0] - rezultatai3[1] + rezultatai3[2] - rezultatai3[3] + rezultatai3[4])
console.log(skaiciavimas3); 

let sakinys1 = fraze1.join(', ');
console.log(sakinys1);

let sakinys2 = fraze2.join(', ');
console.log(sakinys2);

let sakinys3 = fraze3.join(', ');
console.log(sakinys3);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Kintamuju palyginimas');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Skaiciu palyginimas');


if (skaicius1 > skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius1 < skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius2 === skaicius3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius2 !== skaicius3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius1 >= skaicius3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius1 <= skaicius3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Teksto ilgiai');
let ilgis1 = zodis1.length; console.log(ilgis1);
let ilgis2 = zodis2.length; console.log(ilgis2);
let ilgis3 = zodis3.length; console.log(ilgis3);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Teksto ilgiu palyginimas');

if (ilgis1 > ilgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgis1 < ilgis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgis2 === ilgis3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgis2 !== ilgis3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgis1 >= ilgis3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgis1 <= ilgis3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Saraso ilgiai');
rIlgis1 = rezultatai1.length; console.log(rIlgis1);
rIlgis2 = rezultatai2.length; console.log(rIlgis2);
rIlgis3 = rezultatai3.length; console.log(rIlgis3);

fIlgis1 = fraze1.length; console.log(fIlgis1);
fIlgis2 = fraze2.length; console.log(fIlgis2);
fIlgis3 = fraze3.length; console.log(fIlgis3);
