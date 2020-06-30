class TelaInicial{

    constructor(){
    
    
    }


  draw(){  
    
    this._imagemDeFundo();
    
    this._texto();
    
    this._botao();

  
  }
  
  _imagemDeFundo(){
  
      image(imagemTelaInicial, 0, 0, width, height);
    
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(70);
    text('As aventuras de', width / 2, height / 4);
    textSize(100);

    text('Hipsta', width / 2, height / 2.5);
    textFont('Georgia');  
  }
  
  _botao(){
  
      botaoGerenciador.y = height / 2;
      botaoGerenciador.draw();
    
  }
  
  
  
  
  
  
  
  

}