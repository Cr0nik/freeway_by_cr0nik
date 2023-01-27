let colisao = false;
let xAtor = 100;
let yAtor = 370;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
       yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeMover()){
        yAtor += 3;
    }    
  }
  if(keyIsDown(LEFT_ARROW)){
    if(podeMover2()){
        xAtor -= 3;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(podeMover3()){
        xAtor += 3;
    } 
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15);
    if(colisao){
      xAtor = 100;
      yAtor = 370;
      colidiu.play();
    }
  } 
}

function podeMover(){
  return yAtor < 370;
}

function podeMover2(){
  return xAtor > 0;
}

function podeMover3(){
  return xAtor < 475;
}
