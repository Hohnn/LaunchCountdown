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
    let back = secondesRest-1
    if (secondesRest < 10) {
        secondesRest = '0'+secondesRest     
    }
    if (secondesRest < 11) {
        back = '0'+(secondesRest-1)        
    }
    if (minutesRest < 10) {
        minutesRest = '0'+minutesRest    
    }
    let backNum = minutesRest-1
    if (minutesRest < 11) {
        backNum = '0'+(minutesRest-1)        
    }

    refresh();
    const backnum = document.getElementById("backnum")    
    const backnumMin = document.getElementById("backnumMin")
    
    
    

    
    const cone = document.querySelectorAll('.sec')
    const cardAdd = document.getElementById("cardAdd")
    const cardAddMin = document.getElementById("cardAddMin")
    const coneMin = document.querySelectorAll('.min')


    // affiche le numéro pour la premiere card
    if (cardAdd.children.length === 1) {
        backnum.innerHTML = secondesRest
    };

    if (cardAddMin.children.length === 1) {
        backnumMin.innerHTML = minutesRest
    };
    //ajoute une card, si moins de 3 elements
    function addCardMin() {  
        let para = document.createElement("div")
        para.innerHTML = '<div class="card haut min" id="coltest"><div class="card_face card_front"><div class="num num1" id="frontnum">'+minutesRest+'</div></div><div class="card_face card_back"><div class="num num2">'+backNum+'</div></div></div>'
        if (cardAddMin.children.length < 3) {
            cardAddMin.insertBefore(para, cardAddMin.lastElementChild)
        }        
    };
    //si le nombre de card est plus de 4, supprime la first
    if (coneMin.length > 4) {
        cardAddMin.removeChild(cardAddMin.firstElementChild)      
        };

    for (let a = 0; a < coneMin.length; a++) {
                  
         function addcardFlipmin() {
            //check si les card classe ont flip, pour lancer le reste qu'une fois 
            if (coneMin[a].classList.contains('flip')) {
                //si c'est 60 sec ou moins de 2 card ça ajoute et flip                
            } else if ( secondesRest == 60 || cardAddMin.children.length < 2) {
                //créer une div
                let para = document.createElement("div")
                para.innerHTML = '<div class="card haut min" id="coltest"><div class="card_face card_front"><div class="num num1" id="frontnum">'+minutesRest+'</div></div><div class="card_face card_back"><div class="num num2">'+backNum+'</div></div></div>'
                //l'ajoute avant la derniere card pour ne pas la voir pop
                cardAddMin.insertBefore(para, cardAddMin.lastElementChild)
                console.log('what')
                //la flip et change le z index pour l'afficher devant
                coneMin[a].classList.add('flip')
                //passe la card initiale derriere
                cardAddMin.lastElementChild.classList.add('z')
                
            }; 
            
        };          
           
    };

    addcardFlipmin();
    addCardMin();
    addCard();
    

    function addCard() {  
    
        let para = document.createElement("div")
        para.innerHTML = '<div class="card haut sec" id="coltest"><div class="card_face card_front"><div class="num num1" id="frontnum">'+secondesRest+'</div></div><div class="card_face card_back"><div class="num num2">'+back+'</div></div></div>'
        cardAdd.insertBefore(para, cardAdd.lastElementChild)   
    
    }
    if (cone.length > 3) {
        cardAdd.removeChild(cardAdd.firstElementChild)
        
       
        
        }
    for (let a = 0; a < cone.length; a++) {               

        function addcardFlip() {
            cone[a].classList.add('flip')
            cardAdd.lastElementChild.classList.add('z')
        
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

