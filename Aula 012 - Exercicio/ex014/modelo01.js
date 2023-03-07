function horarios( ) {
    var msg = document.getElementById('msg')
    var ft = document.getElementById('imagem')
    var data = new Date()
    var hora = 1 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 4) {
        ft.src = '19-a-meia-noite.png'
        document.body.style.background = '#142027 '
    } 
    else if (hora >= 4 && hora < 6) {
        ft.src="4-a-6-manha.png"
        document.body.style.background = '#fdc46e'
    } 
    else if (hora >= 6 && hora < 12) {
        ft.src = '7-ao-meio-dia.png'
        document.body.style.background = '#e7dead'
    } 
    else if (hora >= 12 && hora < 18) {
        ft.src = 'meio-dia-as-18-horas.png'
        document.body.style.background = '#6584ba'
    } 
    else if (hora >= 18 && hora < 19) {
        ft.src = '18-as-19.png'
        document.body.style.background = '#fbac24'
    } 
    else {
        ft.src = 'meia-noite-as-4.png'
        document.body.style.background = '#010d31'
        
    }
}
