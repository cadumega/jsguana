function carregar () {
  var msg = document.getElementById ('msg')
  var img = document.getElementById ('imagem')
  var data= new Date ()
  var hora = data.getHours()
  msg.innerHTML = ` Agora são ${hora} horas.`
    if (hora >=0 && hora <12) {
      //Bom Dia!!
      img.src = 'arqs/fotomanha.png'
      document.body.style.background = '#e2cd5f'
    } else if (hora >=12 && hora <= 18) {
      // Boa Tarde!
      img.src = 'arqs/fototarde.png'      
      document.body.style.background = '#b98543'
    } else {
      // Boa noite.
      img.src = "arqs/fotonoite.png"
      document.body.style.background = '#515154'
    }
}



/*Criei esses 2 objetos e irei colocar dentro de uma function, para carregar a página,
terei que colocar a data atual, e a hora atual. No msg onde irá aparecer a msg `xxxxx` . 
Para rodar o carregar na página, preciso ir no body e criar  onload , chamar o código carregar. */
//AS condições foram para delimitar o horário e como irá apresentar o background e a imagem. Dentro da function.
