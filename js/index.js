const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")



setInterval(()=> {
    const data = new Date()
    
    horas.innerHTML = formatTime(data.getHours())
    minutos.innerHTML = formatTime(data.getMinutes())
    segundos.innerHTML = formatTime(data.getSeconds())

}, 1000)

function formatTime(time){
    return time < 10 ? "0" + time : time
}

