import dados from './dados.js';

const v1 = document.querySelectorAll('.miniInfo h2');
const v2 = document.querySelectorAll('.miniInfo p');
const daily = document.querySelector('.btn-daily')
const weekly = document.querySelector('.btn-weekly')
const monthly = document.querySelector('.btn-monthly')


function current(value) {
    let cont = 0;
    [value].forEach.call(v1, function(curr) {
        if(value === 'daily'){
            curr.innerHTML = dados[cont++].timeframes.daily.current + 'hrs';
        } else if(value === 'weekly') {
            curr.innerHTML = dados[cont++].timeframes.weekly.current + 'hrs';
        } else {
            curr.innerHTML = dados[cont++].timeframes.monthly.current + 'hrs';
        }
    });
}

function previous(value) {
    let cont = 0;
    [].forEach.call(v2, function(prev) {
        if(value === 'daily'){
            prev.innerHTML = 'Last Week - ' + dados[cont++].timeframes.daily.previous + 'hrs';
        } else if(value === 'weekly') {
            prev.innerHTML = 'Last Week - ' + dados[cont++].timeframes.weekly.previous + 'hrs';
        } else {
            prev.innerHTML = 'Last Week - ' + dados[cont++].timeframes.monthly.previous + 'hrs';
        }
    })
}

function infoDaily() {
    let value = 'daily'
    current(value);
    previous(value);
    daily.style.color = "#d7cffc"
    weekly.style.color = "#464a82"
    monthly.style.color = "#464a82"
}
infoDaily();

function infoWeekly() {
    let value = 'weekly'
    current(value);
    previous(value);
    daily.style.color = "#464a82"
    weekly.style.color = "#d7cffc"
    monthly.style.color = "#464a82"
}

function infoMonthly() {
    let value = 'monthly'
    current(value);
    previous(value);
    daily.style.color = "#464a82"
    weekly.style.color = "#464a82"
    monthly.style.color = "#d7cffc"
}

daily.addEventListener('click', infoDaily);
weekly.addEventListener('click', infoWeekly);
monthly.addEventListener('click', infoMonthly);