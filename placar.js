let placarUsuario = 0;

function placar(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255,0,255));
  text(placarUsuario, width / 2, 28);
}

function marcaPontos(){
  if(yAtor < 30){
    placarUsuario += 1;
    yAtor = 370;
    ponto.play();
  }
  if(colisao){
    placarUsuario = 0;
  }
}

