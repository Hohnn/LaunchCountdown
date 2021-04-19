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

    

    const coltest = document.getElementById("coltest")
    const colSec = document.getElementById("colSec")

    /* addCard(); */
    refresh();
    setTimeout(addCard(), 1000)



    function addCard() {
        
        const flipNumber = document.querySelectorAll('.sec')
        let para = document.createElement("div")
        para.classList.add("card", "haut", "sec")
        para.innerHTML = '<div class="card_face card_front"><div class="num num1" id="frontnum">'+(secondesRest)+'</div></div><div class="card_face card_back"><div class="num num2" id="backnum">'+(secondesRest-1)+'</div></div>'

        colSec.appendChild(para);
        const cone = document.querySelectorAll('.sec')
        cone[1].children[0].firstElementChild.textContent = secondesRest
        console.log(cone)
        
            
            for (let a = 0; a < flipNumber.length; a++) {               
                
                function addcardFlip() {
                    if (cone[a].classList.contains('flip')) {
                    } else {
                        cone[a].classList.toggle('flip')
                        if (cone.length > 3) {
                        cone[a].parentElement.removeChild(cone[0])
                        }
                                                
                    }
                           
                }       
                addcardFlip();
        
        }

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

