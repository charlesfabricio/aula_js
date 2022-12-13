function  calcularDesconto() {
    //Variável que contém o valor do Produtoque o usuário quer saber o desconto
    let valorProduto = document.getElementById('preço').value;

    //Variável que contém o valor do produto com desconto de 20% (0.2)
    let resultado = valorProduto - (valorProduto * 0.2)
    console.log(resultado)

    //Transforma para decimal e com duas casas decimais, ficando no formato de moeda.
    let resultadoformatado = parseFloat(resultado).toFixed(2);

    //Exibe o texto de variável textResultado dentro da tag h3
    let textResultado = `O valor do desconto de 20% do produto é: R$${resultado}`;
    document.getElementsByTagName('h3')[0].innerHTML = textResultado
}
