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