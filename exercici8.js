function calcula(operaci√≥,valor1,valor2){
    const valor1Num = parseFloat(valor1);
    const valor2Num = parseFloat(valor2);
    let resultat;

    switch(operaci√≥) {
        case 'suma':
          resultat = valor1Num+valor2Num;
          break;
        case 'resta':
            resultat= valor1Num-valor2Num;
        
          break;
        case 'multiplicaci√≥':
            resultat=valor1Num * valor2Num;
            break;
        default:
            
          // code block
      } 

    document.getElementById('resultat').innerHTML= resultat
}