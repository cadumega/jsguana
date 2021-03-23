function contar() { //estou pegando os id
  let ini = document.getElementById ('txti')
  let fim = document.getElementById ('txtf')
  let passo = document.getElementById ('txtp')

  if(ini.value.length == 0 || fim.value.length ==00 || passo.value.length ==0) {    //maneira de testar
    window.alert('[ERRO] Faltam dados!')
  } else {
     res.innerHTML = `Contando: `              //alert('Tudo Ok!')
     let i = Number(ini.value)
     let f = Number(fim.value )
     let p = Number (passo.value)

     for(let contador = i; contador <=f; contador+=p) {
       res.innerHTML += `${contador} `
     }
  }
}