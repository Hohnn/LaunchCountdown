const daysIn = document.getElementById("days")
const hoursIn = document.getElementById("hours")
const minutesIn = document.getElementById("minutes")
const secondsIn = document.getElementById("seconds")


// En utilisant les méthodes natives
/* let fin = new Date(2021, 4, 26) */
/* console.log(fin) */

// Ici, l'évènement dont on veut mesurer la durée :
/* let debut = new Date()
console.log(debut)
let duree = fin.getTime() - debut.getTime() // La durée écoulée, en millisecondes
console.log(duree)
let secondes = Math.floor(duree / 1000)
console.log(secondes)
let minutes = Math.floor(secondes / 60)
console.log(minutes)
let hours = Math.floor(minutes / 60)
console.log(hours)
let days = Math.floor(hours / 24)
console.log(days) */

function refresh() {
    let t = 1000;
    setTimeout('showDate()', t)
}


function showDate() {
    let date = new Date();
    let d = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    

    let launch = new Date(2021, 4, 26)
    let dl = launch.getDate();
    let hl = launch.getHours();
    let ml = launch.getMinutes();
    let sl = launch.getSeconds();
    /* refresh(); */
    /* console.log((h + (24*((dl-d)-1)))-hl)
    console.log(d - dl)
    console.log((23 - h) + hl)
    console.log((60 - m) + ml)
    console.log((60 - s) + sl) */

    let joursRest = d - dl
    let heuresRest = (23 - h) + hl
    let minutesRest = (60 - m) + ml
    let secondesRest = (60 - s) + sl
    daysIn.innerHTML = Math.abs( joursRest)
    hoursIn.innerHTML = heuresRest
    minutesIn.innerHTML = minutesRest
    secondsIn.innerHTML = secondesRest

    let back = secondesRest-1

    if ( daysIn.innerHTML < 10 ) {
        daysIn.innerHTML = '0'+ daysIn.innerHTML
    }
    if ( hoursIn.innerHTML < 10 ) {
        hoursIn.innerHTML = '0'+ hoursIn.innerHTML
    }
    if ( minutesIn.innerHTML < 10 ) {
        minutesIn.innerHTML = '0'+ minutesIn.innerHTML
    }
    if ( secondsIn.innerHTML < 10 ) {
        secondsIn.innerHTML = '0'+ secondsIn.innerHTML
    }

    if (back == 0) {
        back = 60
    }

    
    refresh();
    

    const coltest = document.getElementById("coltest")
    const colSec = document.getElementById("colSec")
    const flipNumber = document.querySelectorAll('.sec')
    const cone = document.querySelectorAll('.sec')
    const cardAdd = document.getElementById("cardAdd")

    addCard();
    

    function addCard() {  
    
        let para = document.createElement("div")
        para.innerHTML = '<div class="card haut sec" id="coltest"><div class="card_face card_front"><div class="num num1" id="frontnum">'+secondesRest+'</div></div><div class="card_face card_back"><div class="num num2" id="backnum">'+back+'</div></div></div>'
        //cardAdd.appendChild(para);
        cardAdd.insertBefore(para, cardAdd.lastElementChild)    
        //cone[1].children[0].firstElementChild.textContent = secondesRest
        //console.log(cone)
    }

    for (let a = 0; a < flipNumber.length; a++) {               
        console.log(a)
        //console.log(cone.length)
        function addcardFlip() {
            if (cone[a].classList.contains('flip')) {
            } else {
                cone[a].classList.toggle('flip')
                cone[a].classList.toggle('kk')
                if (cone.length > 3) {
                cardAdd.removeChild(cardAdd.firstElementChild)
                cardAdd.lastElementChild.classList.add('z')
                //setTimeout(cardAdd.insertBefore(cardAdd.lastElementChild, cardAdd.children[2]),1000)
                
                } 
                                        
            }
            //cardAdd.insertBefore(cardAdd.lastElementChild, cardAdd.children[2])
            //setTimeout(cardAdd.insertBefore(cardAdd.lastElementChild, cardAdd.children[2]),1000)
            /* if (cardAdd.lastElementChild.classList.contains('gg')) {
                cardAdd.removeChild(cardAdd.lastElementChild)
                console.log('oui')
            }  */
                    
        }
          
        addcardFlip();    
        
    }

    
}










       
/* 
function cardFlip() {
    if (coltest.classList.contains('flip')) {
        console.log("yes")
    } else {
        coltest.classList.toggle('flip')
}

} */


/* coltest.addEventListener('click', () => {
    coltest.classList.toggle('flip')
}) */

/* const card = document.querySelectorAll('.card') */



/* for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        card[i].classList.toggle('flip')
        console.log(card[i])        
    })
    
    function cardFlip() {
        for (let i = 0; i < card.length; i++) {
            card[5].classList.toggle('flip')
        }
        
    }
} */

