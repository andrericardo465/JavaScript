var horaS = new Date()
var minutoS = new Date()
var segundosS = new Date()
var hora = horaS.getHours()
var minutos = minutoS.getMinutes()
var segundos = segundosS.getSeconds()
console.log(`São ${hora}:${minutos};${segundos}`)
if (hora < 11.59 ) {
    console.log('Tenha um ótimo dia!')
} else if (hora <= 17.59) {
    console.log('Tenha uma ótima tarde!')
}   else {
    console.log('Tenha uma ótima noite!')
}