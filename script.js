const cse223 = 'https://bdren.zoom.us/j/66335581257'
const cse243 = 'https://bdren.zoom.us/j/63691531335?pwd=ZXJJZVAvelZyclNNcVJnTk5oY2w0dz09'
const cse251 = 'https://bdren.zoom.us/j/61811326956?pwd=NmRuQlVFVXd2cUpXSWtBS3RWY2VRQT09'
const ee283 = 'https://bdren.zoom.us/j/65149035376'
const gmail = 'https://mail.google.com/'
const math243 = gmail
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
const timezonebtn = () => {
    {
    let time = new Date()
    const hour = time.getHours()
    const mins = time.getMinutes()
    const date = time.getDate()
    const month = time.getMonth()
    const year = time.getFullYear()
    const seconds = time.getSeconds()
    const week = time.getDay()
        classTime(hour,mins,week)
        document.getElementById('datediv').innerHTML = `<h5>Date : ${date}/${month}/${year}</h5>`
        document.getElementById('timediv').innerHTML = `<h6>Time : ${hour}:${mins}:${seconds}</h6>`
    }
    {
        // document.getElementById('classBtn').innerHTML = `<i class="text-danger"><b>No Internet</b></i>`
    }
}
setInterval(() => {
    timezonebtn()
}, 1000);

const classTime = (hour,mins,week) => {
    console.log(hour, mins, week);
    const classbtn = document.getElementById('classBtn')
    if(week === 0){
        if(hour == 09 && mins >55){
            classbtn.innerHTML = `<a href="${cse243}" target="_blank"><button class="btn btn-danger"><b>CSE - 243</b></button></a>`
        }
        else if((hour == 10 || hour == 11) && (mins<30 || mins>54)){
            classbtn.innerHTML = `<a href="${math243}" target="_blank"><button class="btn btn-success"><b>Math - 243</b></button></a>`
        }
        else if ((hour == 11 || hour == 12) && (mins<30 || mins>54)) {
            classbtn.innerHTML = `<a href="${ee283}" target="_blank"><button class="btn btn-success"><b>EE - 283</b></button></a>`
        }
        else if((hour == 12 || hour == 13) && (mins<30 || mins>54)){
            classbtn.innerHTML = `<a href="${cse223}" target="_blank"><button class="btn btn-success"><b>CSE - 223</b></button></a>`
        }
        else{
            classbtn.innerHTML = `<b style="color: green">NO CLASS</b>`
        }
    }
    else if(week == 1){
        if(hour == 09 && mins >55){
            classbtn.innerHTML = `<a href="${cse243}" target="_blank"><button class="btn btn-danger"><b>CSE - 243</b></button></a>`
        }
        else if((hour == 10 || hour == 11) && (mins<30 || mins>54)){
            classbtn.innerHTML = `<a href="${math243}" target="_blank"><button class="btn btn-success"><b>Math - 243</b></button></a>`
        }
        else if ((hour == 11 || hour == 12) && (mins<30 || mins>54)) {
            classbtn.innerHTML = `<a href="${ee283}" target="_blank"><button class="btn btn-success"><b>EE - 283</b></button></a>`
        }
        else if((hour == 12 || hour == 13) && (mins<30 || mins>54)){
            classbtn.innerHTML = `<a href="${cse223}" target="_blank"><button class="btn btn-success"><b>CSE - 223</b></button></a>`
        }
        else{
            classbtn.innerHTML = `<b style="color: green">NO CLASS</b>`
        }
    }
    else if(week === 2){
        classbtn.innerHTML = `<b style="color: green">NO CLASS</b>`;
    }
    else if(week === 3){
        if(hour == 09 && mins >55){
            classbtn.innerHTML = `<a href="${cse243}" target="_blank"><button class="btn btn-danger"><b>CSE - 243</b></button></a>`
        }
        else if((hour == 10 || hour == 11) && (mins<30 || mins>54)){
            classbtn.innerHTML = `<a href="${math243}" target="_blank"><button class="btn btn-success"><b>Math - 243</b></button></a>`
        }
        else if ((hour == 11 || hour == 12) && (mins<30 || mins>54)) {
            classbtn.innerHTML = `<a href="${ee283}" target="_blank"><button class="btn btn-success"><b>EE - 283</b></button></a>`
        }
        else if((hour == 12 || hour == 13) && (mins<30 || mins>54)){
            classbtn.innerHTML = `<a href="${cse223}" target="_blank"><button class="btn btn-success"><b>CSE - 223</b></button></a>`
        }
        else{
            classbtn.innerHTML = `<b style="color: green">NO CLASS</b>`
        }
    }
    else if(week === 4){
        if(hour == 09 && mins >55){
            classbtn.innerHTML = `<a href="${cse243}" target="_blank"><button class="btn btn-danger"><b>CSE - 243</b></button></a>`
        }
        else if((hour == 10 || hour == 11) && (mins<30 || mins>54)){
            classbtn.innerHTML = `<a href="${math243}" target="_blank"><button class="btn btn-success"><b>Math - 243</b></button></a>`
        }
        else if ((hour == 11 || hour == 12) && (mins<30 || mins>54)) {
            classbtn.innerHTML = `<a href="${ee283}" target="_blank"><button class="btn btn-success"><b>EE - 283</b></button></a>`
        }
        else if((hour == 12 || hour == 13) && (mins<30 || mins>54)){
            // classbtn.innerHTML = `<a href="${cse223}" target="_blank"><button class="btn btn-success"><b>CSE - 223</b></button></a>`
        }
        else{
            classbtn.innerHTML = `<b style="color: green">NO CLASS</b>`
        }
    }
}