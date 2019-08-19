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

hoursInput.addEventListener('change', () => {
    hours = Number(hoursInput.value);
    hoursOutput.textContent = hours;
    constHours = hours;
    // totalTime = constHours + constMins + constSeconds;


    
})
minsInput.addEventListener('change', () => {
    mins = Number(minsInput.value);
    minsOutput.textContent = mins;
    constMins = mins;
    // totalTime = constHours + constMins + constSeconds;

    
})
secondsInput.addEventListener('change', () => {
    seconds = Number(secondsInput.value);
    secondsOutput.textContent = seconds;
    constSeconds = seconds;
    // totalTime = constHours + constMins + constSeconds;

    
})




startBtn.addEventListener('click', (e) => {
    stop = false;
    
 

 document.querySelectorAll('input').forEach(e => {
     e.value = '';
 })

 
 if(seconds > 0 || mins > 0 || hours > 0) {
setInterval(() => {
    
        if(!stop) {
            if(seconds <= 0) {
                if(mins >= 0) {
                    mins--;
                    minsOutput.textContent = mins;
                    seconds = 60;
                }
              
         
            }

            
            if(seconds > 0 ) {
                seconds--;
                if(seconds <= 0 && mins <= 0 && hours <= 0) {
                    stop = true;
                    // secondsOutput = 0;
                    // minsOutput = 0;
                    // hoursOutput = 0;

                }



                console.log(seconds,mins,hours);

        
            }
        
           
            if(mins < 0) { 
                if(hours > 0) {
                    hours--;
                    hoursOutput.textContent = hours;
                    mins = 59;
                   
                }
                
            } 

            console.log(seconds);
            
        
            secondsOutput.textContent = seconds;
            minsOutput.textContent = mins;
            hoursOutput.textContent = hours;
            // console.log('a')
            totalTime = ((constHours * 60) * 60) + (constMins * 60) + constSeconds;
            
            // console.log(totalTime);

            // (300 / 2000) * 100 
            

            let remainingTime = `${(seconds + (mins * 60) + ((hours * 60)* 60))}`;
           let percentComplete = `${(remainingTime / totalTime) * 100}`;
           percentComplete = parseInt(percentComplete); 
        //    console.log(percentComplete);
        countDownBar.style.width = `${100 - percentComplete}%`;
        // countDownBar.textContent = `${100 - percentComplete}% Completed`;



            

            //  console.log((seconds + (mins * 60) + (hours * 60 * 60)) * percentComplete)

 
    
        }
    
    
   
},1000)
 }


       


    

   


})



stopBtn.addEventListener('click', () => {
    stop = true;
})
resetBtn.addEventListener('click', () => {
     hours = 0;
 mins = 0;
 seconds = 0;
 stop = true;
 hoursOutput.textContent = 0;
 minsOutput.textContent = 0;
 secondsOutput.textContent = 0;

})

// let a = (1000 - 100);
// console.log(`${a}`)