
let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hoursElement = document.querySelector('.p_h')


function upDateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fix0(hour)}:${fix0(minute)}:${fix0(second)}`;

    secondElement.style.transform = `rotate(${(second * 6) - 90}deg)`;

    minuteElement.style.transform = `rotate(${(minute * 6) - 90}deg)`

    hoursElement.style.transform = `rotate(${(hour * 30) - 90}deg)`
    
    function fix0(time) {
        return time < 10 ? '0' + time : time
    }
}

setInterval(upDateClock, 1000)
upDateClock();