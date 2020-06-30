class Pontuacao{
  constructor(){
    this.pontos = 0;
    this.pontAumentaVida = 100;
    
  }
  
  exibe(){
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionaPontos(){
    this.pontos += 0.1;
  }
  
  chegouEmCem(){   
       
    if((parseInt(this.pontos) - parseInt(this.pontAumentaVida)) === 0){

        this.pontAumentaVida = this.pontAumentaVida + 100;
        
        return true;
    }
  }
  
}












