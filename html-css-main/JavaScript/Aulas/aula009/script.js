function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //bom dia
        document.body.style.background = '#CE8602'
        img.src ='manha.png'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src ='tarde.png'
        document.body.style.background = '#D0B39D'
    }else {
        //Boa noite
        img.src ='noite.png'
        document.body.style.background= '#04524F'
    }

}