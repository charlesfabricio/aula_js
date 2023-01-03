// const arrayNotas = [9,8,7];
// console.log(arrayNotas)

// arrayNotas.push(6)
// console.log(arrayNotas);


// Métodos: push, pop, splice, shift, unshift
// const arraySalada = ["maçã","banana","manga","mamão","laranja"];
// console.log(arraySalada);

// arraySalada.push("leite condensado");
// console.log(arraySalada);

// arraySalada.push("leite em pó");
// console.log(arraySalada);

// arraySalada.pop();
// console.log(arraySalada);

// arraySalada.shift();
// console.log(arraySalada);



// const nomes = ["Ronier", "Larissa", "Vandecir", "Davi" "Alessandro", "Davi"]

// let posicao = nomes.indexOf("Larissa");

// if(posicao === -1) {
    //    console.log("Nome não encontrado");
// } else {
    //  console.log(nomes[posicao]);
// }

// console.log(posicao)



// const cores = ["azul", "branco", "vermelho", "branco"]



// function charles() {
    // descrevo as ações
// }
// charles();


// function falar(parametroFala) {
    // console.log(parametroFala.toUpperCase())
// }
// function imprimir(funcaoImprimir, texto) {
    // funcaoImprimir(texto)
// }
// imprimir(console.log, "Olá mundo")

// const arraySalada = ["maçã","banana","manga","mamão","laranja"];
// 
// function capsLk(valor) {
    // return valor.toUpperCase()
// }
//  const saladaUpper = arraySalada.map((fruta) => fruta.toUpperCase())
//  console.log(arraySalada)
//  console.log(saladaUpper)


const nomes = ["Ronier", "Larissa", "Vandecir", "Davi", "Alessandro", "Davi"]

function filtrarNomes(nome) {
    if(nome === "Davi")
    return nome;
}
console.log(nomes.filter(filtrarNomes))

console.log(nomes.includes("Ronier"))
