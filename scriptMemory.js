const card1 = document.getElementById("oneOne")
const card2 = document.getElementById("oneTwo")
const card3 = document.getElementById("twoOne")
const card4 = document.getElementById("twoTwo")

const cardList = [card1,card2,card3,card4]
let numPickedCard = 0;
let firstPickedCard = "red";
let colorList= ["red","red","blue","blue"]
let pickedCard =[false,false,false,false]
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
    if(numPickedCard<2 && pickedCard[0]==false ){
        card1.classList.add(colorList[0])
        numPickedCard += 1;
        pickedCard[0]=true;
        if(numPickedCard===2 ){
            setTimeout(hiddeBackCard,1000)
        }
    }


})


card2.addEventListener("click", (event)=>{
    if (numPickedCard<2 && pickedCard[1]==false ){
        card2.classList.add(colorList[1])
        numPickedCard += 1;
        pickedCard[1]=true;

        if(numPickedCard===2){
            setTimeout(hiddeBackCard,1000)
        }
    }



})

card3.addEventListener("click", (event)=>{
    
    if(numPickedCard<2 && pickedCard[2]==false ){
        card3.classList.add(colorList[2])
        numPickedCard += 1;
        pickedCard[2]=true;
        if(numPickedCard===2){
            setTimeout(hiddeBackCard,1000)
        }
    }

})

card4.addEventListener("click", (event)=>{
    
    if(numPickedCard<2 && pickedCard[3]==false ){
        card4.classList.add(colorList[3])
        numPickedCard += 1;
        pickedCard[3]=true;
        if(numPickedCard===2){
            if (colorList[alreadyPickedCard]==colorList[3]){
                
            }
            setTimeout(hiddeBackCard,1000)
        }
    }


})


function alreadyPickedCard(){
    let whichIndexPicked = 0;
    let found = false;
    for (let i = 0 ; i < colorList.length && !found;i++){
        if (colorList[i]==true)
        found=true;
        whichIndexPicked=i

    }
    return whichIndexPicked
}

function hiddeBackCard(){
    let incr = 0;
    for(let elem of cardList){
        elem.setAttribute("class", "")
        elem.classList.add("hidden")
        pickedCard[incr]=false;
        incr++;
    }
    numPickedCard=0;
}


