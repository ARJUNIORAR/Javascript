function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano ) {
    window.alert('[ERRO] Verifiquei os dados e tente novamente !')
  } else {
    var fsex = document.getElementsByName ('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade <10) {
            //criança
            img.src = 'imagem/bebeM.jpg'
        }   else if (idade <21){
            //jovem
            img.src ='imagem/jovemM.jpg'
        } else if ( idade < 50){
            //Adulto
            img.src = 'imagem/homem.jpg'
        } else {
            //idoso
            img.src ='imagem/idosoM.jpg'
        }
    } else if (fsex[1].checked){
        genero = 'mulher'
        if (idade >=0 && idade <10) {
            //criança
            img.src ='imagem/bebef.jpg'
        }   else if (idade <21){
            //jovem
            img.src = 'imagem/jovemF.jpg'
        } else if ( idade < 50){
            //Adulto
            img.src = 'imagem/mulher.jpg'
        } else {
            //idoso
            img.src ='imagem/idosoF.jpg'
        }
    }
    res.style.textAlign = 'center' 
    res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
    res.appendChild(img)
    
  }
}
