function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas.`
    if (horas >= 0 && horas < 12) {
        //Bom dia!
        img.src = ('imagemmanha.png')
        document.body.style.background = '#e2cd9f'
    }else if(horas >= 12 && horas < 18) {
        //Boa tarde!
        img.src = ('imagemtarde.png')
        document.body.style.background = '#b9836f'
    }else {
        //Boa noite!
        img.src = ('imagemnoite.png')
        document.body.style.background = '#515154'
    }
}
