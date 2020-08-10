window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Timer
    let deadline = '2020-09-01'

    function setTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/1000/60/60)%60);

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        } ;
    }

    function setClock(endTime) {
        let hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds');
        if ((Date.parse(endTime) - Date.parse(new Date())) <= 0){
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        } else {
            let timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let time = setTimeRemaining(endTime);
                function addZero(num) {
                    if (num <= 9 ){
                        return '0' + num;
                    } else return num;
                }

                hours.textContent = addZero(time.hours);
                minutes.textContent = addZero(time.minutes);
                seconds.textContent = addZero(time.seconds);
                if (time.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }
    }
    setClock(deadline);
});