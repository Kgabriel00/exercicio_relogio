var dias = new Date()
var hoje = dias.getDay()
var hora = dias.getHours()
var minuto = dias.getMinutes()
var caixa_data = document.getElementById('date')
var caixa_dias = document.getElementById('day')
var caixa_hora = document.getElementById('hour')
var container = document.getElementById('container')

switch(hoje){
    case 0:
        caixa_dias.innerText = `SUNDAY`
        break
    case 1:
        caixa_dias.innerText = `MONDAY`
        break
    case 2:
        caixa_dias.innerText = `TUESDAY`
        break
    case 3:
        caixa_dias.innerText = `WEDNESDAY`
        break
    case 4:
        caixa_dias.innerText = `THURSDAY`
        break
    case 5:
        caixa_dias.innerText = `FRIDAY`
        break
    case 6:
        caixa_dias.innerText = `SATURDAY`
        break
    default:
        caixa_dias.innerText = '**DATE ERROR**'
} 

if(hora < 10 && minuto < 10){                
    caixa_hora.innerText = `0${hora}:0${minuto}`  
}else if(hora < 10){
    caixa_hora.innerText = `0${hora}:${minuto}`
}else if(minuto < 10){
    caixa_hora.innerText = `${hora}:0${minuto}`
}else{
    caixa_hora.innerText = `${hora}:${minuto}`
}


if(hora >= 5 && hora < 12){
    document.body.style.backgroundColor = 'rgb(255, 225, 142)'
    caixa_data.style.backgroundImage = "url('manha.jpg')"
    caixa_data.style.backgroundColor = 'rgb(255, 195, 117)'
}else if(hora < 18 && hora >= 12){
    document.body.style.backgroundColor = 'rgb(135, 176, 184)'
    caixa_data.style.backgroundImage = "url('tarde.jpg')"
    caixa_data.style.backgroundColor = 'blue'
    caixa_dias.style.opacity = '10'
    caixa_hora.style.opacity = '10'
}else {
    document.body.style.backgroundColor = 'rgb(63, 63, 88)'
    caixa_data.style.backgroundImage = "url('noite.jpg')"
    caixa_data.style.backgroundColor = 'blue'
}