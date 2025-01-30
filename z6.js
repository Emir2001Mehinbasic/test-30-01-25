// Napiši funkciju obrniString(tekst) koja prima string i vraća isti string obrnut koristeći petlju(HOF).

// 	Ulaz: 

// 	console.log(obrniString("programiranje"));
// console.log(obrniString("javascript"));

// Izlaz: 

// "ejranimargorp"
// "tpircsavaj"

const string = "programiranje";

const obrniString = string.split("").reverse().join("");

console.log(obrniString);
