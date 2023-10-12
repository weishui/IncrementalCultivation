
var gameData = {
    qi: 0,
    qiPerClick: 1,
    qiPerClickCost: 10
}

function refineQi(){
    gameData.qi += gameData.qiPerClick;
    document.getElementById("qiRefined").innerHTML = gameData.qi + " 气已炼成"
}

function buyqiPerClick(){
    if(gameData.qi >= gameData.qiPerClickCost){
        gameData.qi -= gameData.qiPerClickCost
        gameData.qiPerClick +=1
        gameData.qiPerClickCost *= 2
    }
}

var mainGameLoop = window.setInterval(function(){
    refineQi()
}, 1000)

var sameGameLoop = window.setInterval(function(){
    localStorage.setItem("ICSave", JSON.stringify(gameData))
}, 15000)

var savedGameData = JSON.parse(localStorage.getItem("ICSave"))
if(savedGameData !== null){
    gameData = savedGameData
}