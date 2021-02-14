const cse223 = 'https://bdren.zoom.us/j/66335581257'
const cse243 = ''
const cse251 = ''
const ee283 = 'https://bdren.zoom.us/j/65149035376'
const math243 = ''
const gmail = 'https://mail.google.com/'
function darkTheme(isDark){
    if(isDark == true){
        document.getElementById('darkBtn').style.display = "none"
        document.getElementById('whiteBtn').style.display = "block"
        document.getElementById('bodyId').style.backgroundColor = "black"
        document.getElementById('bodyId').style.color = "white"
    }
    else{
        document.getElementById('darkBtn').style.display = "block"
        document.getElementById('whiteBtn').style.display = "none"
        document.getElementById('bodyId').style.backgroundColor = "white"
        document.getElementById('bodyId').style.color = "black"
    }
}
var flag = 0
    document.getElementById('routineBtn').addEventListener("click",function(){
    if(flag == 0){
        document.getElementById('routine').style.display = "table"
        flag = 1
    }
    else{
        document.getElementById('routine').style.display = "none"
        flag = 0
    }
})
let i =0
const timezonebtn = () => {
    fetch('http://worldtimeapi.org/api/timezone/Asia/Dhaka')
    .then(res => res.json())
    .then(data => {
        let time = data.datetime
        let week = data.day_of_week
        i++
        let date = time.slice(0,10)
        let dtime = time.slice(11,19)
        const ctime = dtime.slice(0,5)
        classTime(ctime,week)
        document.getElementById('datediv').innerHTML = `<h5>Date : ${date}</h5>`
        document.getElementById('timediv').innerHTML = `<h6>Time : ${dtime}</h6>`
    })
    .catch(err => {
        document.getElementById('classBtn').innerHTML = `<i class="text-danger"><b>No Internet</b></i>`
    })
}
setInterval(() => {
    timezonebtn()
}, 1000);

const classTime = (time,week) => {
    let hour = time.slice(0,2)
    let mins = time.slice(3,5)
    hour = parseInt(hour);
    mins = parseInt(mins);
    const classbtn = document.getElementById('classBtn')
    if(week === 0){
        // classbtn.innerHTML = `<a href="${ee283}" target="_blank"><button class="btn btn-success"><b>EE - 223</b></button></a>`
        // classbtn.innerHTML = `<a href="${cse251}" target="_blank"><button class="btn btn-success"><b>CSE - 251</b></button></a>`
        // classbtn.innerHTML = `<a href="${cse223}" target="_blank"><button class="btn btn-success"><b>CSE - 223</b></button></a>`
        // classbtn.innerHTML = `<a href="${gmail}" target="_blank"><button class="btn btn-success"><b>Math - 243</b></button></a>`
        if(hour === 20 && mins >= 55){
        }
        else{
            classbtn.innerHTML = `<b style="color: green">NO CLASS</b>`
        }
    }
    else if(week === 1){
        // classbtn.innerHTML = `<a href="${cse243}" target="_blank"><button class="btn btn-success"><b>CSE - 243</b></button></a>`
        // classbtn.innerHTML = `<a href="${math243}" target="_blank"><button class="btn btn-success"><b>Math - 243</b></button></a>`
        if (hour === 11 && mins >= 54) {
            classbtn.innerHTML = `<a href="${ee283}" target="_blank"><button class="btn btn-success"><b>EE - 283</b></button></a>`
        }
        else if(hour === 12 && mins >= 54){
            classbtn.innerHTML = `<a href="${cse223}" target="_blank"><button class="btn btn-success"><b>CSE - 223</b></button></a>`
        }
    }
    else if(week === 2){
        classbtn.innerHTML = `<b style="color: green">NO CLASS</b>`;
    }
    else if(week === 3){
        classbtn.innerHTML = `<a href="${cse223}" target="_blank"><button class="btn btn-success"><b>CSE - 223</b></button></a>`
        classbtn.innerHTML = `<a href="${cse243}" target="_blank"><button class="btn btn-success"><b>CSE - 243</b></button></a>`
        classbtn.innerHTML = `<a href="${cse251}" target="_blank"><button class="btn btn-success"><b>CSE - 251</b></button></a>`
        classbtn.innerHTML = `<a href="${ee283}" target="_blank"><button class="btn btn-success"><b>EE - 223</b></button></a>`
    }
    else if(week === 4){
        classbtn.innerHTML = `<a href="${math243}" target="_blank"><button class="btn btn-success"><b>Math - 243</b></button></a>`
        classbtn.innerHTML = `<a href="${cse251}" target="_blank"><button class="btn btn-success"><b>CSE - 251</b></button></a>`
        classbtn.innerHTML = `<a href="${cse243}" target="_blank"><button class="btn btn-success"><b>CSE - 243</b></button></a>`
    }
}