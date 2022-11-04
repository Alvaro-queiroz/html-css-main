function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero ='um Homem'
            if(idade < 15){
                //Criança
                //img.setAttribute('src', 'imagem desejada.png')
            }
            else if(idade < 25){
                // Jovem
                //img.setAttribute('src', 'imagem desejada.png')
            }
            else if(idade < 50){
                //Adulto
                //img.setAttribute('src', 'imagem desejada.png')
            } else {
                //Idoso
                //img.setAttribute('src', 'imagem desejada.png')
            }
        } else if (fsex[1].checked) {
            genero=' uma Mulher'
            if(idade < 15){
                //Criança
            }
            else if(idade < 25){
                // Jovem
            }
            else if(idade < 50){
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
    }
}