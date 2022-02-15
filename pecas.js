// Variáveis, são um espaço na memória do computador para guardar algum valor
let PesoPeca = 120

let quantidadePecas = 9

if (PesoPeca > 100) {
    console.log ("Peso maior que 100g, logo podemos cadastrar a peça!")

    if (quantidadePecas < 10) {
        console.log ("Ainda há espaço na caixa, podemos cadastrar a peça")
    } else {
        console.log ("Quantidade ultrapassada, não pode cadastrar.")
    }

} else {
    console.log ("Peso insuficiente, não é possível cadastrar")
}

let nomeDaPeca = "Um"

console.log ("O comprimento do nome da peca é:", nomeDaPeca.length)
if (nomeDaPeca.length < 3){
    console.log ("O nome é muito curto, não é possivel cadastrar.")
} else {
    console.log("Nome de peca adequado, podemos cadastrar.")
}




