const timer = document.querySelector(".watch");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

let startTime = 0;
let elaspedTime = 0;
let currentTime = 0;
let paused = true;
let intervalid;
let hrs = 0;
let mins = 0;
let secs = 0;


startBtn.addEventListener("click", ()=> {
    if (paused){
        paused = false;
        startTime = Date.now() - elaspedTime;
        intervalid = setInterval(updateTime, 75)
    }
})
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elaspedTime = Date.now() - startTime;
        clearInterval(intervalid);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalid);
    startTime = 0;
    elaspedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timer.textContent = "00:00:00"
});

function updateTime(){
    elaspedTime = Date.now() - startTime;

    secs = Math.floor((elaspedTime / 1000) % 60);
    mins = Math.floor((elaspedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elaspedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timer.textContent = `${hrs} : ${mins} : ${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
