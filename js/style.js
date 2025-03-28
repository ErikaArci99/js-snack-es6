// -----SNACK 1----- //

// ARRAY COMPOSTO DA OGGETTI 

const biciclette = [
    {
        nome: 'Giant TCR Advanced SL 0',
        peso: 6.4,
    },
    {
        nome: 'Scott Addict RC Ultimate',
        peso: 5.9,
    },
    {
        nome: 'Specialized S-Works Aethos/Sram Red Etap AXS',
        peso: 6.34,
    },
    {
        nome: 'Wilier Triestina Verticale SLR',
        peso: 6.5,
    },
    {
        nome: 'Orbea Orca M10iLTD Replica',
        peso: 6.7,
    },
    {
        nome: 'Look 795 Blade RS',
        peso: 7,
    },
    {
        nome: 'Cube Litening Air C:68X SLT',
        peso: 6.7,
    },
    {
        nome: 'Bianchi Specialissima RC/Shimano Dura-Ace',
        peso: 6.6,
    },
    {
        nome: 'Cannondale SuperSix Evo Lab 71',
        peso: 6.8,
    },
    {
        nome: 'Bmc Teammachine SLR 01 One',
        peso: 6.7,
    }
]

// MOSTRO L`ARRAY IN CONSOLE

console.log(biciclette);

// DICHIARAZIONE VARIABILI

let pesoMin = biciclette[0].peso;
let piuLeggera = biciclette[0];

// DETERMINO LA PIU LEGGERA

for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[i].peso < pesoMin) {
        pesoMin = biciclette[i].peso;
        piuLeggera = biciclette[i];
    }
}

// STAMPO RISULTATO IN CONSOLE
console.log(piuLeggera);


// ----SNACK 2---- //

// ARRAY COMPOSTO DA OGGETTI

const squadre = [
    {
        nomeSquadra: 'Juventus',
        punti: 0,
        falli: 0,
    },
    {
        nomeSquadra: 'Roma',
        punti: 0,
        falli: 0,
    },
    {
        nomeSquadra: 'Napoli',
        punti: 0,
        falli: 0,
    },
    {
        nomeSquadra: 'Inter',
        punti: 0,
        falli: 0,
    },
    {
        nomeSquadra: 'Milan',
        punti: 0,
        falli: 0,
    },
]

// STAMPO L`ARRAY IN CONSOLE

console.log(squadre);

// NUMERO RANDOM PER I PUNTI

