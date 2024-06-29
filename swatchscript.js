const stopwatchDuration = document.getElementById("stopwatchDuration");
const start = document.getElementById("start");
const lap = document.getElementById("lap");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const laps = document.getElementById("laps");



let hrs = 0, min = 0, sec = 0, ms = 0, timeInterval;

const zeroPad = (num) => String(num).padStart(2, '0');
 //eg : if num is 5, then String(num) converts 5 to the string '5'.padStart(2, '0') pads '5' with a zero to make it '05'. 

start.onclick = () => {
    console.log("start");
    timeInterval = setInterval(() => {
        ms++;
        if (ms === 100) {
            sec++;
            ms = 0;
        }
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hrs++;
            min = 0;
        }
        stopwatchDuration.innerHTML = `${zeroPad(hrs)}:${zeroPad(min)}:${zeroPad(sec)}:${zeroPad(ms)}`;

    }, 10);


start.setAttribute("style","display:none"); 
stop.setAttribute("style","display:block");
lap.setAttribute("style","display:block"); 
reset.setAttribute("style","display:none");
lap.removeAttribute("disabled")


};

let count=0;
lap.onclick = () => {
    console.log("lap");
    count++;
    let li=document.createElement("li");
    li.innerHTML=`${"#"+ count }-${zeroPad(hrs)}:${zeroPad(min)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    laps.appendChild(li);
    laps.scroll ({top:laps.scrollHeight, behavior:"smooth"});
};

stop.onclick = () => {  
    console.log("stop");
    clearInterval(timeInterval);
    lap.setAttribute("style","display:none"); 
    reset.setAttribute("style","display:block");
    start.setAttribute("style","display:block"); 
    start.innerHTML="RESUME"
    stop.setAttribute("style","display:none");

};

reset.onclick = () => {
    laps.innerHTML="";
    hrs=min=sec=ms=count=0;
    clearInterval(timeInterval);
    stopwatchDuration.innerHTML="00:00:00:00"
    
    start.innerHTML="START";
    lap.setAttribute("style","display:block"); 
    lap.setAttribute("disabled",true);
    reset.setAttribute("style","display:none");
    start.setAttribute("style","display:block"); 
    stop.setAttribute("style","display:none");

};
