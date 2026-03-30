function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector(`div#res`)

    if( fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute(`id`,`foto`)
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>= 0 && idade <10){
                //Criança
                img.setAttribute(`src`, `_imagens/_menino0.jpg`)
            }else if (idade < 21){
                //Jovem
                img.setAttribute(`src`, `_imagens/_menino2.jpg`)
            }else if (idade < 50){
                //Adulto
                img.setAttribute(`src`, `_imagens/_menino3.jpg`)
            }else{
                //Idoso
                img.setAttribute(`src`, `_imagens/_menino4.jpg`)
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
 if(idade>= 0 && idade <10){
                //Criança
                img.setAttribute(`src`, `_imagens/_menina0.jpg`)
            }else if (idade < 21){
                //Jovem
                img.setAttribute(`src`, `_imagens/_menina2.jpg`)
            }else if (idade < 50){
                //Adulto
                img.setAttribute(`src`, `_imagens/_menina3.jpg`)
            }else{
                //Idoso
                img.setAttribute(`src`, `_imagens/_menina4.jpg`)
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}