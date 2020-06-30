class Vida{

  constructor(total){
  
    this.total = total;
    this.vidas = this.total;
    
    this.largura = 25;
    this.altura = 25;
    
    this.y = 20;
    
    this.xInicial = 20;
  
  
  }


  draw(){  
    for(let i = 0; i < this.total; i++){
        const margem =  i * 10;
        const posicao = this.xInicial * (1 + i);
        image(imagemVida, posicao + margem, this.y, this.largura, this.altura);

    }
  }
  
  ganhaVida(){    
        this.vidas++;  
        this.total = this.vidas;  
  }
  
  perdeVida(){    
      this.vidas--;
      this.total = this.vidas; 
  
  }  
  

}  