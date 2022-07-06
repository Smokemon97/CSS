

function vytvorTabulku(){
    let zobrazeni = document.getElementsByClassName("ukol")
    zobrazeni[0].innerHTML = ''
   let cislozRadku = document.getElementById("inputRadek").value

   let cislozSloupce = document.getElementById("inputSloupec").value
  
   
   for(let i=0; i<cislozRadku; i++){
    let elem = document.createElement("div");
    elem.setAttribute('id', i);
    elem.innerText = "*";
    zobrazeni[0].appendChild(elem);
    document.getElementById(i).classList.add('dflex');
    for (let index=0; index<cislozSloupce -1; index++) {
        let elem2 = document.createElement("div");
        elem2.setAttribute('id', 'sloupec' + index);
        elem2.innerText = "*";
        elem.appendChild(elem2);
    }
}
}


// Kamen, nuzky, papir

let tlacitkoKamen = document.getElementById("kamen")
let tvaVolba = document.getElementById("tvaVolba")
let moznosti = ["kamen", "nuzky", "papir"]
let pcVolba = document.getElementById("pcVolba")
let vysledek = document.getElementById("vysledek")
let scenare = ["výhra", "remíza", "prohra"]
let nahodneCislo = ""

function spustFunkciKamen(){
tvaVolba.textContent = "Tvá volba: " + moznosti[0]
vygenerujPcVolbu()
kdoVyhral()
}

function spustFunkciNuzky(){
tvaVolba.textContent = "Tvá volba: " + moznosti[1]
vygenerujPcVolbu()
kdoVyhral()

}

function spustFunkciPapir(){
    tvaVolba.textContent = "Tvá volba: " + moznosti[2]
    vygenerujPcVolbu()
    kdoVyhral()
}
function spustFunkci(typ){
    if (typ = "kamen"){
        tvaVolba.textContent = "Tvá volba: " + moznosti[0]
    } else if (typ= "nuzky"){
        tvaVolba.textContent = "Tvá volba: " + moznosti[2]
    } else {
        tvaVolba.textContent = "Tvá volba: " + moznosti[2]
    }
    
    vygenerujPcVolbu()
    kdoVyhral()
}

function vygenerujPcVolbu(){
    
    let nahodneCislo = Math.floor(Math.random()*3)
    pcVolba.textContent = "Volba PC: " + moznosti[nahodneCislo]
}

function kdoVyhral()

