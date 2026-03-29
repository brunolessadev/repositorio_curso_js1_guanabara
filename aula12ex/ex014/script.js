function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = `_imagens/_manha.jpg`
        document.body.style.background = `#e2cd9f`
    }else if(hora >= 12 && hora <= 18 ){
        img.src = `_imagens/_tarde.jpg`
        document.body.style.background = `#b9846f`
        //Boa tarde
    } else{
        img.src = `_imagens/_noite.jpg`
        document.body.style.background = `#515154`
        //Boa noite
    }
}
