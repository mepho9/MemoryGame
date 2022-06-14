const card1 = document.getElementById("oneOne")
const card2 = document.getElementById("oneTwo")
const card3 = document.getElementById("twoOne")
const card4 = document.getElementById("twoTwo")

const cardList = [card1,card2,card3,card4]
let numPickedCard = 0;

let colorList= ["red","red","blue","blue"]

const shuffleArray = colorList => {
    for(let i = colorList.length-1;i> 0;i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = colorList[i];
        colorList[i] = colorList[j];
        colorList[j] =temp;
    }
}

shuffleArray(colorList)

let playing = true;

card1.addEventListener("click", (event)=>{
    card1.classList.add(colorList[0])

    numPickedCard += 1;

    if(numPickedCard===2){
        setTimeout(hiddeBackCard,500)
    }

})


card2.addEventListener("click", (event)=>{
    if (numPickedCard<2){
        card2.classList.add(colorList[1])
        numPickedCard += 1;
        console.log(card2.backgroundColor)
        if(numPickedCard===2){
            setTimeout(hiddeBackCard,500)
        }
    }



})

card3.addEventListener("click", (event)=>{
    card3.classList.add(colorList[2])
    numPickedCard += 1;
    console.log(card3.backgroundColor)
    if(numPickedCard===2){
        setTimeout(hiddeBackCard,500)
    }

})

card4.addEventListener("click", (event)=>{
    card4.classList.add(colorList[3])
    numPickedCard += 1;
    console.log(card4.backgroundColor)
    if(numPickedCard===2){
        setTimeout(hiddeBackCard,500)
    }

})


 

function hiddeBackCard(){
    for(let elem of cardList){
        elem.setAttribute("class", "")
        elem.classList.add("hidden")
    }
    numPickedCard=0;
}


