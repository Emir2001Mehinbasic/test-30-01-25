// Napiši funkciju jePalindrom(niz), koja provjerava da li se niz čita isto sprijeda i straga.

// 	Ulaz:

// console.log(jePalindrom([1, 2, 3, 2, 1]));
// console.log(jePalindrom([1, 2, 3, 4, 5]));

// 	Izlaz:

// true
// false

const niz = [1, 2, 3, 2, 1];

const jePalindrom = (niz) => {
  return niz.reduce((acc, e, i) => {
    if (!acc) {
      return false;
    }
    if (e !== niz[niz.length - 1 - i]) {
      return false;
    }
    return true;
  }, true);
};

console.log(jePalindrom(niz));
