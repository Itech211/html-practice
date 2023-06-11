const hourEl = document.getElementById("hour")
const minuteEL = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const milliEL = document.getElementById("milli")
const ampmEl = document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let t = new Date().getMilliseconds()
    let ampm = "AM"

    if(h > 12){
    h = h -12;
    ampm = "PM";
}

h= h<10 ? "0" + h : h;
m= m<10 ? "0" + m : m;
s= s<10 ? "0" + s : s;
t = t<10? "0" + t : t;

hourEl.innerText = h;
minuteEL.innerText = m;
secondsEl.innerText = s;
ampmEl, (innerText =ampm);
milliEL.innerText = t;
setTimeout(()=>{
updateClock() 
}, 10)
}
updateClock()