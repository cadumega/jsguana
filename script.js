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
    if(fsex[0].checked) {
      genero = 'Homem'
    } else if (fsex[1].checked) {
      genero = 'Mulher'
    }
    res.getElementsByClassName.textAlign= 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  }

}

//se fano.value.length == 0 se a pessoa não digitou o ano, ou então fano.value > ano vou dar a msg...

// toda vez que vc apertar em verificar, vai aparecer um img, uma em baixo da outra, ai pra evitar isso, fiz o seguinte, coloquei um id no input button, e no js ficou assim: 
// var recarregar = document.getElementById('recarregar')
// recarregar.value = ' '
// no caso zerei o valor de input, ai ele não aparece mais