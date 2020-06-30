class Jogo {

  constructor() {

    this.indice = 0;

    this.mapa = [{
        inimigo: 0,
        velocidade: random(50, 100)
      },
      {
        inimigo: 1,
        velocidade: random(50, 100)
      },
      {
        inimigo: 2,
        velocidade: random(50, 100)
      },
      {
        inimigo: 1,
        velocidade: random(50, 100)
      },
      {
        inimigo: 2,
        velocidade: random(50, 100)
      },
      {
        inimigo: 0,
        velocidade: random(50, 100)
      },
    ]

  }

  setup() {

    cenario             = new Cenario(imagemCenario, 7);

    personagem          = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

    const inimigo       = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 20);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 30);

    pontuacao           = new Pontuacao();

    vida                = new Vida(3);

    inimigos.push(inimigo);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoGrande);

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somPulo.play();
    }
  }

  draw() {

    cenario.exibe();
    cenario.move();

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionaPontos();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {

      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1)
        this.indice = 0;

    }

    if (personagem.estaColidindo(inimigo)) {

      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 4);
        noLoop();
      }     

    } 
    if (pontuacao.chegouEmCem(vida.vidas)){    
      vida.ganhaVida();    
    }
       

  }

}