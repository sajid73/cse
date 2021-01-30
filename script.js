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