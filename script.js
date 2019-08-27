let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");

let hoursOutput = document.querySelector('.hours');
let minsOutput = document.querySelector('.mins');
let secondsOutput = document.querySelector('.seconds');
let hoursInput = document.querySelector('#hours');
let minsInput = document.querySelector('#mins');
let secondsInput = document.querySelector('#seconds');
let countDownBar = document.querySelector('.inner-bar');
let hours = 0;
let mins = 0;
let seconds = 0;
let stop = false;
let constHours = 0;
let constMins = 0;
let constSeconds = 0;
let totalTime = 0;
let updateTime;
let running = false;

hoursInput.addEventListener('change', () => {
    hours = Number(hoursInput.value);
    hoursOutput.textContent = hours;
    constHours = hours;



})
minsInput.addEventListener('change', () => {
    mins = Number(minsInput.value);
    minsOutput.textContent = mins;
    constMins = mins;


})
secondsInput.addEventListener('change', () => {
    seconds = Number(secondsInput.value);
    secondsOutput.textContent = seconds;
    constSeconds = seconds;


})




startBtn.addEventListener('click', (e) => {
    stop = false;



    document.querySelectorAll('input').forEach(e => {
        e.value = '';
    })


    if (seconds > 0 || mins > 0 || hours > 0) {
        if (!stop) {
            if (!running) {
                updateTime = setInterval(() => {
                    if (!stop) {
                        if (seconds <= 0) {
                            if (mins >= 0) {
                                mins--;
                                minsOutput.textContent = mins;
                                seconds = 60;
                            }
                        }
                        if (seconds > 0) {
                            seconds--;
                            if (seconds <= 0 && mins <= 0 && hours <= 0) {
                                stop = true;
                            }
                        }
                        if (mins < 0) {
                            if (hours > 0) {
                                hours--;
                                hoursOutput.textContent = hours;
                                mins = 59;
                            }
                        }
                        secondsOutput.textContent = seconds;
                        minsOutput.textContent = mins;
                        hoursOutput.textContent = hours;
                        totalTime = ((constHours * 60) * 60) + (constMins * 60) + constSeconds;
                        let remainingTime = `${(seconds + (mins * 60) + ((hours * 60)* 60))}`;
                        let percentComplete = `${(remainingTime / totalTime) * 100}`;
                        percentComplete = parseInt(percentComplete);
                        countDownBar.style.width = `${100 - percentComplete}%`;
                    }
                }, 1000)
                running = true;
            }
        }
    }
})



stopBtn.addEventListener('click', () => {
    clearInterval(updateTime);
    stop = true;
    running = false;

})
resetBtn.addEventListener('click', () => {
    hours = 0;
    mins = 0;
    seconds = 0;
    stop = true;
    hoursOutput.textContent = 0;
    minsOutput.textContent = 0;
    secondsOutput.textContent = 0;
    clearInterval(updateTime);
    countDownBar.style.width = `${0}%`;
    running = false;
})