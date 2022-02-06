let player1Turn = true
let player1Score =0
let player2Score =0

const rollBtn =document.getElementById("rollBtn")
const message =document.getElementById("message")
const  player1Scoreboard =document.getElementById("player1Scoreboard")
const  player1Dice =document.getElementById("player1Dice")
const  player2Scoreboard =document.getElementById("player2Scoreboard")
const  player2Dice =document.getElementById("player2Dice")
const  resetBtn =document.getElementById("resetBtn")

const main = document.getElementById("main")

let isGameAlive = true
let randNum = 0
let randplayer= 0
let  PrevScorePlayer1 =0
let  PrevScorePlayer2 =0

function randomPlayer(){
      randplayer = Math.floor(Math.random() * 2) + 1
    return randplayer
}

// Genarate Randon number for dice between 1-6
function randomNumber(){
      randNum = Math.floor(Math.random() * 6) + 1
     return randNum
}
// for animation 
function rollDice(num){
    if(num === 1){
        player1Dice.classList.add("rotate-in-center")
       player2Dice.classList.remove("rotate-in-center")
    }else{
        
        player2Dice.classList.add("rotate-in-center")
        player1Dice.classList.remove("rotate-in-center")
    }
     
    
}

rollBtn.addEventListener("click", function(){

   
     if (isGameAlive && player1Turn ){   
     randomNumber()
     rollDice(1) // call for animation
     PrevScorePlayer1  = player1Score
     player1Dice.innerHTML = randNum
     message.innerHTML = "Player 2 Turn"
     player1Dice.classList.remove("active")
     player2Dice.classList.add("active")
     player1Score = PrevScorePlayer1 + randNum
     player1Scoreboard.innerHTML = player1Score
     player1Turn = false
  
     }else 
    {
        randomNumber()
        rollDice(2) // called for animation
        PrevScorePlayer2 = player2Score
        message.innerHTML = "Player 1 Turn"
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
        player2Dice.innerHTML = randNum
        player2Score = PrevScorePlayer2 + randNum
        player2Scoreboard.innerHTML = player2Score
        player1Turn = true
    }

    
   if (player1Score >= 20){
       message.classList.add("tracking-in-expand")
       message.innerHTML = "Player 1 has Won! "
       displayButton()
     
       
       
   } else if (player2Score >= 20){
       message.classList.add("tracking-in-expand")
       message.innerHTML = "Player 2 has Won!"
        displayButton()
       
   }
    
    
})
function displayButton(){
      rollBtn.style.display ="none"
       resetBtn.style.display= "block"
          isGameAlive = false
    
}
      
    


resetBtn.addEventListener("click" , function(){
     resetGame()
       
} )

function resetGame(){
       main.classList.add("puff-in-center")
       resetBtn.style.display= "none"
       rollBtn.style.display ="block"
       isGameAlive = true
       message.innerHTML = "Player 1 Turn"
       player1Dice.innerHTML = "-"
       player2Dice.innerHTML = "-"
       player1Scoreboard.innerHTML = 0
       player2Scoreboard.innerHTML = 0
       player1Dice.classList.add("active")
       player2Dice.classList.remove("active")
       message.classList.remove("tracking-in-expand")
       player1Score =0
       player2Score =0
    
}