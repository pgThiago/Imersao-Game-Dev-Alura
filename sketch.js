function setup() {
  
    createCanvas(windowWidth, windowHeight);
    frameRate(20);
    somDoJogo.loop();

    jogo = new Jogo();  
    telaInicio = new TelaInicial();  
    jogo.setup();    
  
    cenas = {
      
      jogo,
      telaInicio,
      
    };  
  
    botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
  
}

function keyPressed(){
  
    jogo.keyPressed(key);
  
}

function draw() {
  
  cenas[cenaAtual].draw();
  
  
}

