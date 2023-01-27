function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaCarro();
  movimentaAtor();
  mostraCarro();
  loopCarro();
  verificaColisao();
  marcaPontos();
  placar();
}