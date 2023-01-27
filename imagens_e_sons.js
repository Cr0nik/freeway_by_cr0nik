let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let trilha;
let ponto;
let colidiu;

function preload(){
  imagemEstrada = loadImage('imagens/estrada.png');
  imagemAtor = loadImage('imagens/ator-1.png')
  imagemCarro1 = loadImage('imagens/carro-1.png');
  imagemCarro2 = loadImage('imagens/carro-2.png');
  imagemCarro3 = loadImage('imagens/carro-3.png');
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]; 
  trilha = loadSound('sons/trilha.mp3');
  ponto = loadSound('sons/pontos.wav');
  colidiu = loadSound('sons/colidiu.mp3');
}