// PIRMA UŽDUOTIS
// Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti. Naudokit do while loop, kol kažką įrašys arba įrašys teisingai ir if bei else kad patikrintų ką įrašys.

// "Įveskite prekės kainą";
// "Ar reikalingas pristatymas į namus? (taip/ne)";
// "Į kurį miestą reiks pristatyti?"

// Galiausiai atspausdintų tokią informaciją:

// ---
// 1 variantas (be pristatymo)

// Prekės kaina: xx.xx €
// Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a


// ---
// 2 variantas (su pristatymu)

// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.

do {
    var kaina = prompt("Įveskite prekės kainą")
} while(isNaN(kaina) == true)

kaina = Number(kaina)

do {
    var pristatymas = prompt("Ar reikalingas pristatymas į namus? (taip/ne)")
} while(pristatymas !== "taip" && pristatymas !== "ne")

if(pristatymas==="taip") {
    var miestas = prompt("Į kurį miestą reiks pristatyti?")
}

if(kaina < 100){
    var pristatymoKaina = 2.5
} else {
    var pristatymoKaina = 0.99
}


if(pristatymas==="ne"){
    console.log(`Prekės kaina: ${kaina.toFixed(2)} €`)
    console.log(`Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`)
}else {
    console.log(`Prekės kaina: ${kaina.toFixed(2)} €`)
    console.log(`Pristatymas: ${pristatymoKaina} €`)
    console.log(`Iš viso: ${(kaina+pristatymoKaina).toFixed(2)} €`)
    console.log(`Prekę pristatysime į ${miestas} per 1-3 dienas.`)
}

