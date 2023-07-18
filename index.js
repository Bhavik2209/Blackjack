let player={
    name:"PLAYER",
    chips:100
}
let win=0
let lose=0
let winEl=document.getElementById("win-el")
let loseEl=document.getElementById("lose-el")
let messageEl=document.getElementById("message-el")
let firstcard =getRandomCard()
let secondcard =getRandomCard()
//  #array
let cards=[]

let hasblackjack=false
let isalive=false
message=""

let sum = 0
// console.log(sum)
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name +": $" +player.chips




function startgame(){
    let firstcard =getRandomCard()
    let secondcard =getRandomCard()
    //  #array
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    isalive=true
    rendergame()
}
function rendergame(){
    sumEl.innerText= "sum : "+ sum
    cardsEl.innerText="cards : "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.innerText+=" "+ cards[i]
    }
    if (sum<=20){ 
        message=("Do you want to draw a new card ? ")
    }else if (sum === 21){
        message=("Wohoo! you've got blackjack ! ")
        hasblackjack=true
        
        playerEl.textContent=player.name +": $" +player.chips
    } else{
        message=("You are out of the game ! ")
        isalive=false
        // lose+=1
        // loseEl.textContent="LOSE :" + lose
    }
    messageEl.innerText=message
}

function newcard(){
    if(sum<21){
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        if(sum>21)
        {

            lose+=1
            loseEl.textContent="LOSE :" + lose
        }
        if(sum===21)
        {
            win+=1
            winEl.textContent="WIN :" + win
            player.chips+=50
        }
    }
    rendergame()
    
}

function getRandomCard(){
    let x = Math.floor((Math.random() * 13) + 1);
    if (x>10){
        return 10
    } else if(x===1){
        return 11
    } else{
        return x
    }
}
