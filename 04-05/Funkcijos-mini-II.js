console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Septinta uzduotis');

function tekstasIlgis(a) {
    if (typeof a !== 'string') {
        return 'ivestas kintamasis nera tekstinio tipo'
    } else {  
    console.log(a);
    return a.length
    }
}

console.log(tekstasIlgis('labas'));
console.log(tekstasIlgis(5));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Astunta uzduotis');
function telNr(a) {
    if (typeof a !== 'object') {
        return 'ivestas netinkamo tipo kintamasis'
    }
    if ((a.length) !== 10) {
        return 'ivestas ne desimties skaiciu kintamasis'
    }
    for (let index = 0; index < a.length; index++) {
        if (typeof a[index] !== "number") {
            return 'kintamojo skaiciai yra netinkamo tipo'
        };
        if (a[index].toString().length !== 1) {
            return 'ivesta per daug skaiciu'
        }
    }
    return `"(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}"`;
}

console.log(telNr(5));
console.log(telNr([5]));
console.log(telNr([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(telNr([8, 6, 1, 1, 2, 3, 3, 8, 9, 10]));
console.log(telNr(['a', 6, 1, 1, 2, 3, 3, 8, 9, 0]));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Devinta uzduotis');

function tekstoPalyginimas(a, b) {
    console.log(a.length, b.length);
    if (typeof a !== 'string' 
        || typeof b !== 'string') {
        return 'vienas arba abu kintamieji yra netinkamo tipo'
    }
    if (a.length > b.length) {
        return 'pirmasis kintamasis yra ilgesnis uz antraji'
    } else if (a.length < b.length) {
        return 'pirmasis kintamasis yra trumpesnis uz antraji'
    } else {
        return 'abu kintamieji yra vienodo ilgio'
    }
};

console.log(tekstoPalyginimas('labas', 'iki'));
console.log(tekstoPalyginimas('iki', 'labas'));
console.log(tekstoPalyginimas(1, 'iki'));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('Desimta uzduotis');

function aTekste(a) {
    let aCount = 0;
    if (typeof a !== 'string') {
        return 'kintamasis yra netinkamo tipo'
    }
    for (let index = 0; index < a.length; index++) {
        if (a[index] !== 'a') {
            continue
        } else {
            aCount++
        }
    }
    return aCount;
};
console.log(aTekste('labas'));
console.log(aTekste('azarbaidzanas'));
console.log(aTekste('iki'));
console.log(aTekste([1, 2]));
console.log(aTekste(0));