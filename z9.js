// Napiši funkciju jesuAnagrami(str1, str2),
//  koja provjerava da li su dva stringa anagrami (sadrže iste karatkere ali u drugačijem redosljedu).

// 	Ulaz: 

// console.log(jesuAnagrami("listen", "silent"));
// console.log(jesuAnagrami("hello", "world"));

// 	Izlaz: 
	
// true
// false

const str1 = "listen";
const str2 = "silent";

function jesuAnagrami(str1,str2){
    const anagram = str2.split("").reverse().join("");
    return anagram
}
console.log(jesuAnagrami(str1,str2));
