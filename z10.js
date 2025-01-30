
//  Napiši funkciju jeAritmetickiNiz(niz),
//  koja provjerava da li su brojevi u nizu raspoređeni u aritmetičkom nizu (gdje je razlika između svakog uzastopnog para brojeva ista).

// 	Ulaz: 
	
// 	console.log(jeAritmetickiNiz([2, 4, 6, 8, 10]));
// console.log(jeAritmetickiNiz([3, 6, 9, 15]));

// 	Izlaz: 
	
// 	true
// false



const jeAritmetickiNiz = (niz) => {
  
  const razlika = niz[1] - niz[0];

  const artimeticki = niz.reduce((acc, e, i, arr) => {
    if (i === 0) 
      return true;

    return acc && e - arr[i - 1] === razlika;
  }, true);

  return artimeticki;
};

console.log(jeAritmetickiNiz([2, 4, 6, 8, 10]));

console.log(jeAritmetickiNiz([3, 6, 9, 15]));