/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/





console.log('Je kan een schoen customizen.');



var schoen1Element = document.querySelector("#schoen1");
var schoen2Element = document.querySelector("#schoen2");
var schoen3Element = document.querySelector("#schoen3");

var geelElement = document.querySelector("#geel");
var omgekeerdElement = document.querySelector("#omgekeerd");
var verwijderElement = document.querySelector("#verwijder");

var maat41Element = document.querySelector("#maat41");
var maat42Element = document.querySelector("#maat42");
var maat43Element = document.querySelector("#maat43");
var maat44Element = document.querySelector("#maat44");
var maat45Element = document.querySelector("#maat45");


var schoenElement = document.querySelector("#schoen");
var prijsElement = document.querySelector("#prijs");

//standaard waarde
var merkKeuze = 'schoen1';


// laat de schoen zien
schoenElement.src = "_img/" + merkKeuze + ".jpg";

// deze functien zorgt ervoor dat ik niet constant dezelfde code hoef te typen.
// en er zit een prijsfunctie bij.
function schoen() {
    schoenElement.src = "_img/" + merkKeuze + ".jpg";
    if (merkKeuze == 'schoen1') {
        prijsElement.textContent = '€120,-';
    } else if (merkKeuze == 'schoen2') {
        prijsElement.textContent = '€90,-';
    } else   {
        prijsElement.textContent = '€70,-';
    }

}
// eventHandlers
// soort schoen functions
function schoen1() {
    merkKeuze = 'schoen1';
    schoen();
}

function schoen2() {
    merkKeuze = 'schoen2';
    schoen();
}

function schoen3() {
    merkKeuze = 'schoen3';
    schoen();
}

// kleur functions
function geelKleur() {
  schoenElement.classList.remove('omgekeerd'); // verwijderd de andere styles zodat ze niet met elkaar overlappen
  schoenElement.classList.add('geel'); // add een css style aan de img
}

function omgekeerdKleur() {
  schoenElement.classList.remove('geel');
  schoenElement.classList.add('omgekeerd');
}

function verwijderKleur() {
  schoenElement.classList.remove('geel', 'omgekeerd');
}

// maat functions
function maat41Function() {
  schoenElement.classList.remove('maat42', 'maat43', 'maat44', 'maat45'); // zelfde als hierboven gebeurd hier maar dan met meer
  schoenElement.classList.add('maat41');
}
function maat42Function() {
  schoenElement.classList.remove('maat41', 'maat43', 'maat44', 'maat45');
  schoenElement.classList.add('maat42');
}
function maat43Function() {
  schoenElement.classList.remove('maat42', 'maat41', 'maat44', 'maat45');
  schoenElement.classList.add('maat43');
}
function maat44Function() {
  schoenElement.classList.remove('maat42', 'maat43', 'maat41', 'maat45');
  schoenElement.classList.add('maat44');
}
function maat45Function() {
  schoenElement.classList.remove('maat42', 'maat43', 'maat44', 'maat41');
  schoenElement.classList.add('maat45');
}
// function gemaakt die een popup geeft als je de pagina opent
function welkom(){
  alert("Welkom bij mijn eindopdracht");
}
// animation gemaakt met een keypress en een timer om hem telkens opnieuw te kunnen gebruiken.
function lopen(){
    var key = event.key ;
    if ( key == 'l') {
      schoenElement.classList.add('lopen');
      setTimeout( ()=> schoenElement.classList.remove('lopen') , 4000);
    }
  }
// eventListeners
window.onload = welkom; //als je de pagina laad gaat hij meteen deze function doen.
schoen1Element.addEventListener('click', schoen1);
schoen2Element.addEventListener('click', schoen2);
schoen3Element.addEventListener('click', schoen3);

geelElement.addEventListener('click', geelKleur);
omgekeerdElement.addEventListener('click', omgekeerdKleur);
verwijderElement.addEventListener('click', verwijderKleur);

maat41Element.addEventListener('click', maat41Function);
maat42Element.addEventListener('click', maat42Function);
maat43Element.addEventListener('click', maat43Function);
maat44Element.addEventListener('click', maat44Function);
maat45Element.addEventListener('click', maat45Function);

document.addEventListener('keypress' , lopen );
