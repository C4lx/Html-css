console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
  `Porto Alegre`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destino possíveis: ");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade.")
//     listaDeDestinos.splice(1,1);   //removendo item
// }      else
//     //a pessoa é menor de idade.
//     if(estaAcompanhada){
//         console.log("Comprador está acompanhado.");
//     listaDeDestinos.splice(1,1);   //removendo item
//     }
//     else{
//         console.log("O comprador não é maior de idade, não será possível fazer a venda.");
//     }

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(1, 1); //removendo item
} else {
  console.log("O comprador não é maior de idade, não será possível fazer a venda.");
}

console.log("Embarque: \n\n")
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem!");
} else{
    console.log("O comprador não é maior de idade, não será possível embarcar.");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
