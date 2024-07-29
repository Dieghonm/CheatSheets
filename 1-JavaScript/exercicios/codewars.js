function DNAtoRNA(dna) {
  let rna = ''
  for (let c = 0; c < dna.length; c++ ) {
    if (dna[c] === 'T') {
      rna +='U'
    }else {
      rna += dna[c]
    }
  }
  return rna
}

console.log(DNAtoRNA('TRTRTR'))
