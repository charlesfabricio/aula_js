let pais = 'Brasil';

console.log(pais);

// tranformando para maiúscula 
console.log(pais.toUpperCase());

let frase = 'Um País continental';
console.log(pais + ' ' +frase);

/*Concatenando string utilizandoo o Template string, forma atualizada de concatenação. */
// Console.log(`${país}` ${frase}`) 
let fraseCompleta = `O ${pais} um país continetal`;
console.log(fraseCompleta.replace('continental', 'tropical'));

//ver quantos caractéres
console.log(fraseCompleta.length);

