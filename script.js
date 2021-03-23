function verificar () {               // adicionando método verificar
  var data = new Date()                                            // window.alert('Funcionou')
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')                //formulário ano
  var res = document.querySelector('div#res')         // var res = document.getElementById ('res')
  if(fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[Erro] Verifique os dados e tente novamente!") 
  } else {
    var fsex = document.getElementsByName('radsex')            //window.alert(`tudo ok`)        //  micro validação
    var idade = ano - Number (fano.value)
    var genero = ''                               //res.innerHTML = `Idade calculada: ${idade}`   //teste
    var img = document.createElement ('img')
    img.setAttribute ('id' ,'foto' )            // criando dinamicamente, já no html <img id ='foto'
    if(fsex[0].checked) {
      genero = 'Homem'

        if (idade >=0 && idade <10 ) {
          // Criança
          img.setAttribute('src', 'arqs/foto-bebe-m.png')
        } else if (idade < 21) {
          // Jovem
          img.setAttribute('src', 'arqs/foto-jovem-m.png')
        }else if (idade < 55) {
          // Adulto
          img.setAttribute('src', 'arqs/foto-adulto-m.png')
        }else {
          // Idoso
          img.setAttribute('src', 'arqs/foto-idoso-m.png')
        }

      } else if (fsex[1].checked) {
        genero = 'Mulher'

        if (idade >=0 && idade <10 ) {
          // Criança
          img.setAttribute('src', 'arqs/foto-bebe-f.png')
        } else if (idade < 21) {
          // Jovem
          img.setAttribute ('src','arqs/foto-jovem-f.png')
        }else if (idade < 55) {
          // Adulto
          img.setAttribute ('src','arqs/foto-adulto-f.png')
        }else {
          // Idoso
          img.setAttribute ('src','arqs/foto-idoso-f.png')
        }
      } 

    res.getElementsByClassName.textAlign= 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)  //adicionar elemento
    }

}

