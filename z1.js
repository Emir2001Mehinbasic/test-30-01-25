// Napisi funkciju koja za ulaze ++x i x++ povecava vrijednost pocetne varijable, 
// a za ulaze -–x i x-– smanjuje vrijednost varijable za 1. Pocetna vrijednost je 0.

// Primjer:
// Ulaz: ["--X","X++","X++", “X++”]
// Izlaz: 2
 let arr =["--X","X++","X++", "X++"]



function povecavaPocetneVrijednostiVarijable(arr) {
  let pocretnaVrijednost = 0;

  arr.forEach((e) => {
    if (e === "++X" || e === "X++") {
      pocretnaVrijednost += 1;
    }
    if (e === "--X" || e === "X--") {
      pocretnaVrijednost -= 1;
    }
  });

  return pocretnaVrijednost;
}

console.log(povecavaPocetneVrijednostiVarijable(arr));


