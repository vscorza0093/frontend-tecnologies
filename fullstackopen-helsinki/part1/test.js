const t = [1, 2, 3, 4, 5]

const [primeiro, segundo, terceiro, ...resto] = t

console.log(terceiro, primeiro, segundo)  // 3 1 2 é impresso
console.log(resto)          // [4, 5] é impresso
