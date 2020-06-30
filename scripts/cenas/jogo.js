class Jogo{
  
  constructor(){
  
    this.inimigoAtual = 0;
    
    this.mapa = [
    
            
      
    ];
  
  }

  setup(){
    
    cenario = new Cenario(imagemCenario, 4);
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    
    const inimigo       = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 1000);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 70, 52, 52, 200, 150, 10, 2000);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 3000);
  
    pontuacao = new Pontuacao();
    
    vida = new Vida(3, 3);

    inimigos.push(inimigo);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoGrande);
  
  }
  
  keyPressed(key){
      if(key === 'ArrowUp'){
          personagem.pula();
          somPulo.play();
      }
  }  
  
  draw(){
  
      cenario.exibe();
      cenario.move();

      vida.draw();


      pontuacao.exibe();
      pontuacao.adicionaPontos();

      personagem.exibe();
      personagem.aplicaGravidade();


      const inimigo = inimigos[this.inimigoAtual];
      const inimigoVisivel = inimigo.x < -inimigo.largura;

      inimigo.exibe();
      inimigo.move();

      if(inimigoVisivel){
        this.inimigoAtual++;
        if(this.inimigoAtual > 2){
          this.inimigoAtual = 0;  
        }
        inimigo.velocidade = parseInt(random(10, 20));
      }


      inimigos.forEach(inimigo => {
          inimigo.exibe();
          inimigo.move(); 
          if(personagem.estaColidindo(inimigo)){
              vida.perdeVida();
              personagem.tornarInvencivel();
            if(vida.vidas === 0){
              image(imagemGameOver, width / 2 - 200, height / 4);
              noLoop();        
            }
          }    
      })
    
  }
  
}  