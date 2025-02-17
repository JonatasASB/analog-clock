//Selecionando elementos que vão ser alterados
let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hoursElement = document.querySelector('.p_h')

//Função responsável por mostrar horas, minutos e segundos
function upDateClock() {
    //variáveis que irão armazenar as horas, minutos e segundos
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //formatando as horas, minutos e segundos (relógio digital)
    digitalElement.innerHTML = `${fix0(hour)}:${fix0(minute)}:${fix0(second)}`;

    //rotacionando ponteiros de hora, minuto e segundo
    secondElement.style.transform = `rotate(${(second * 6) - 90}deg)`;

    minuteElement.style.transform = `rotate(${(minute * 6) - 90}deg)`

    hoursElement.style.transform = `rotate(${(hour * 30) - 90}deg)`
    
    //Função responsável por incrementar um '0' caso a hora seja menor de 10
    function fix0(time) {
        return time < 10 ? '0' + time : time
    }
}

//Intervalo para atualizar o relogio
setInterval(upDateClock, 1000)
//Chamando a função
upDateClock();