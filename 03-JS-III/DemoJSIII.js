function encontrarVocalA(string){
    for(var i = 0; i < string.length; i++){
      if(string[i] === 'a'){
        return "Encontramos la vocal"
      }
    }
     return "El string no tiene ninguna letra a"
  }
  encontrarVocalA("Maria")