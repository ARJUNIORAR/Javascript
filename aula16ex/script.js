function contar() {
  var ini = document.getElementById("txti")
  var fim = document.getElementById("txtf")
  var passo = document.getElementById("txtp")
  var res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `Impossivel contar`
    window.alert(`[ERRO] Faltam dados!`)
  } else {
    res.innerHTML = `Contando: `
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <= 0){
        window.alert(`Passo invalido! Considerando PASSO 1`)
        p = 1
    }
    if(i < f ){
        //contagem crescente
        for(var c = i; c <= f; c+=p){
            res.innerHTML += `${c} \u{1F449} `
    
        }
    } else{
        //contagem regressiva
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449} `
        }
    }
  }
}