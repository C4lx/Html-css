console.log(`Trabalhando com listas`);
// const pOa =
 // const sP =
// // const rJ =

const listaDeDestinos = new Array(
    `Porto Alegre`, `São Paulo`, `Rio de Janeiro`
);

listaDeDestinos.push(`Recife`); //adiciona um item na listem.
console.log("Destino possíveis: ");
// console.log(pOa, rJ, sP);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);   
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);