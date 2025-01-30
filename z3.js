// Napisi funkciju koja za date rijeci i prefix, vraca rijeci koje imaju taj prefix.


// Primjer:
// Ulaz: words = ["pay","attention","practice","attend"], prefix = "at"
// Izlaz: [“attention”, “attend”]

const words = ["pay", "attention", "practice", "attend"];
const prefix = "at";

function vracaRijeciSaIstimprefixom(words, prefix) {
  return words.filter((e) => e.startsWith(prefix));
}

console.log(vracaRijeciSaIstimprefixom(words, prefix));