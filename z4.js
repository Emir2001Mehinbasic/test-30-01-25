// Napisi funkciju koja za kvadratnu matricu, vraca sumu brojeva na dijagonalama.

// Primjer:
// Ulaz: [[1,2,3], [4,5,6], [7,8,9]]
// Izlaz: 25 (1 + 5 + 9 + 3 + 7)

function sumaDijagonala(m) {
// PS: nezz sa hof ovo uradit
  let sum = 0;

  const n = m.length;

  for (let i = 0; i < n; i++) {

    sum += m[i][i];
    sum += m[i][n - 1 - i];
  }

  if (n % 2 === 1) {

    const sredina = Math.floor(n / 2);

    sum -= m[sredina][sredina];
  }
  return sum;
}

console.log(
  sumaDijagonala([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
