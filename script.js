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
    /* daysIn.innerHTML = Math.abs( joursRest) */
    joursRest = Math.abs( joursRest) 
    /* hoursIn.innerHTML = heuresRest */
    /* minutesIn.innerHTML = minutesRest
    secondsIn.innerHTML = secondesRest */



    /* if ( daysIn.innerHTML < 10 ) {
        daysIn.innerHTML = '0'+ daysIn.innerHTML
    } */
    /* if ( hoursIn.innerHTML < 10 ) {
        hoursIn.innerHTML = '0'+ hoursIn.innerHTML
    } */
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

    if (heuresRest < 10) {
        heuresRest = '0'+heuresRest   
    }
    let backNumHeur2 = heuresRest-1
    if (heuresRest < 11) {
        backNumHeur2 = '0'+(heuresRest-1)        
    }

    if (joursRest < 10) {
        joursRest = '0'+joursRest   
    }
    let backNumDays2 = joursRest-1
    if (joursRest < 11) {
        backNumDays2 = '0'+(joursRest-1)        
    }

    refresh();
    const backnum = document.getElementById("backnum")    
    const backnumMin = document.getElementById("backnumMin")
    const backnumHeur = document.getElementById("backnumHeur")
    const backnumDays = document.getElementById("backnumDays")
    
    
    

    
    const cone = document.querySelectorAll('.sec')
    const cardAdd = document.getElementById("cardAdd")
    const cardAddMin = document.getElementById("cardAddMin")
    const cardAddHeur = document.getElementById("cardAddHeur")
    const cardAddDays = document.getElementById("cardAddDays")
    const coneMin = document.querySelectorAll('.min')
    const coneHeur = document.querySelectorAll('.heur')
    const coneDays = document.querySelectorAll('.Days')

    // affiche le numéro pour la premiere card

    if (cardAddDays.children.length === 1) {
        backnumDays.innerHTML = joursRest
    };
 
    
    //si le nombre de card est plus de 4, supprime la first
    if (coneDays.length > 4) {
        cardAddDays.removeChild(cardAddDays.firstElementChild)      
        };
        //loop pour check chaque card
    for (let a = 0; a < coneDays.length; a++) {
                  
         function addcardFlipDays() {
            //check si les card classe ont flip, pour lancer le reste qu'une fois 
            if (coneDays[a].classList.contains('flip')) {
                //si c'est 60 sec ou moins de 2 card ça ajoute et flip                
            } else if ( heuresRest == 24 || cardAddDays.children.length < 2) {
                //créer une div
                let para = document.createElement("div")
                para.innerHTML = '<div class="card haut heur" id="coltest"><div class="card_face card_front"><div class="num num1" id="frontnum">'+joursRest+'</div></div><div class="card_face card_back"><div class="num num2">'+backNumDays2+'</div></div></div>'
                //l'ajoute avant la derniere card pour ne pas la voir pop
                cardAddDays.insertBefore(para, cardAddDays.lastElementChild)
                //la flip et change le z index pour l'afficher devant
                coneDays[a].classList.add('flip')
                //passe la card initiale derriere
                cardAddDays.lastElementChild.classList.add('z')
                
            }; 
            
        }; addcardFlipDays();          
           
    };
    //days ^^

    // affiche le numéro pour la premiere card

    if (cardAddHeur.children.length === 1) {
        backnumHeur.innerHTML = heuresRest
    };
 
    
    //si le nombre de card est plus de 4, supprime la first
    if (coneHeur.length > 4) {
        cardAddHeur.removeChild(cardAddHeur.firstElementChild)      
        };
        //loop pour check chaque card
    for (let a = 0; a < coneHeur.length; a++) {
                  
         function addcardFlipHeur() {
            //check si les card classe ont flip, pour lancer le reste qu'une fois 
            if (coneHeur[a].classList.contains('flip')) {
                //si c'est 60 sec ou moins de 2 card ça ajoute et flip                
            } else if ( minutesRest == 60 || cardAddHeur.children.length < 2) {
                //créer une div
                let para = document.createElement("div")
                para.innerHTML = '<div class="card haut heur" id="coltest"><div class="card_face card_front"><div class="num num1" id="frontnum">'+heuresRest+'</div></div><div class="card_face card_back"><div class="num num2">'+backNumHeur2+'</div></div></div>'
                //l'ajoute avant la derniere card pour ne pas la voir pop
                cardAddHeur.insertBefore(para, cardAddHeur.lastElementChild)
                //la flip et change le z index pour l'afficher devant
                coneHeur[a].classList.add('flip')
                //passe la card initiale derriere
                cardAddHeur.lastElementChild.classList.add('z')
                
            }; 
            
        }; addcardFlipHeur();          
           
    };

    //heure ^^

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



