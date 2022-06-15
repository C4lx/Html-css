console.log(`\n Trabalhando com loops`);

const listaDeDestinos = new Array(
  `Porto Alegre`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = `Porto Alegre`

console.log("\n Destino possíveis: ");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste  = false;

for(let cont=0; cont<3; cont++){
   if(listaDeDestinos[contador] == destino) {
       destinoExiste = true;
       break;
   }
    contador +=1;
}

console.log("Destino existe: ", destinoExiste);


if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("...Erro...");
}