let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [7, 5, 3, 5, 4, 2];
let comprimentoCarros = 50;
let alturaCarros = 40;

//mostra carros na tela
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i] , comprimentoCarros, alturaCarros);
  } 
}

//movimentação dos carros
function movimentaCarro(){
  for(let i = 0; i < xCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  } 
}

//loop dos carros

function loopCarro(){
  for(let i = 0; i < xCarros.length; i = i + 1){
    if(ultrapassouLimite(xCarros[i])){
      xCarros[i] = 630;
    }
  } 
}

//verificação do limite da tela para realizar o loop
function ultrapassouLimite(xCarros){
  return xCarros <= -40
}