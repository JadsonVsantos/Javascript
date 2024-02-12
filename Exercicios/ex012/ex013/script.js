function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
             //Criança
             img.setAttribute('src', 'bbhfoto6.png')
        } else if(idade < 21) {
            //Jovem
            img.setAttribute('src', 'chjfoto5.png')
        } else if(idade < 50) {
             //Adulto
             img.setAttribute('src', 'adhfoto1.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idhfoto.png')
        }
       
    } else if(fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'bbmfoto7.png')
        } else if(idade < 21) {
            //Jovem
            img.setAttribute('src', 'cmjfoto4.png')
        } else if(idade < 50) {
             //Adulto
             img.setAttribute('src', 'admfoto3.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idmfoto.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}
}

