const daysIn = document.getElementById("days")
const hoursIn = document.getElementById("hours")
const minutesIn = document.getElementById("minutes")
const secondsIn = document.getElementById("seconds")

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

    let joursRest = d - dl
    let heuresRest = (23 - h) + hl
    let minutesRest = (60 - m) + ml
    let secondesRest = (60 - s) + sl
    daysIn.innerHTML = Math.abs( joursRest)
    hoursIn.innerHTML = heuresRest
    /* minutesIn.innerHTML = minutesRest
    secondsIn.innerHTML = secondesRest */



    if ( daysIn.innerHTML < 10 ) {
        daysIn.innerHTML = '0'+ daysIn.innerHTML
    }
    if ( hoursIn.innerHTML < 10 ) {
        hoursIn.innerHTML = '0'+ hoursIn.innerHTML
    }
    /* if ( minutesIn.innerHTML < 10 ) {
        minutesIn.innerHTML = '0'+ minutesIn.innerHTML
    }
    if ( secondsIn.innerHTML < 10 ) {
        secondsIn.innerHTML = '0'+ secondsIn.innerHTML
    } */
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
 
    
    //si le nombre de card est plus de 4, supprime la first
    if (coneMin.length > 4) {
        cardAddMin.removeChild(cardAddMin.firstElementChild)      
        };
        //loop pour check chaque card
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
                //la flip et change le z index pour l'afficher devant
                coneMin[a].classList.add('flip')
                //passe la card initiale derriere
                cardAddMin.lastElementChild.classList.add('z')
                
            }; 
            
        }; addcardFlipmin();          
           
    };

    

    addCard();
    

    function addCard() {  
    
        let para = document.createElement("div")
        para.innerHTML = '<div class="card haut sec" id="coltest"><div class="card_face card_front"><div class="num num1" id="frontnum">'+secondesRest+'</div></div><div class="card_face card_back"><div class="num num2">'+back+'</div></div></div>'
        cardAdd.insertBefore(para, cardAdd.lastElementChild)   
    
    };

    if (cone.length > 3) {
        cardAdd.removeChild(cardAdd.firstElementChild)
 
    };

    for (let a = 0; a < cone.length; a++) {               

        function addcardFlip() {
            cone[a].classList.add('flip')
            cardAdd.lastElementChild.classList.add('z')
        
        }
          
        addcardFlip();    
    };

    
};



