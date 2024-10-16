function viewProfile() {
    header();
    document.getElementById('app').innerHTML += /*HTML */ `
    <img src= "${model.data.users}">
    <div>Personalia:</div>
    <div>Events:</div>
    <div>Goals:</div>
    <button></button>
    `
    ; 
}

function createGoal(){
    header();
    document.getElementById('app').innerHTML += /*HTML */ `
    <img src= "${model.data.users}">
    <div>Personalia:</div>
    <div>Events:</div>
    <div>Goals:</div>
    <div>Ditt mål:</div>
    <input type="text">
    <div>Beskrivelse:</div>
    <input type="text">
    <div>Antall utførelser:</div>
    <input type="number">
    `
    ; 
}

//Vi trenger

//Inputfelt - tittel
//Inputfelt - beskrivelse
//Mulighet for å sette antall
//Muligfhet for å måle progresjon
//Mulighet for å checke av når man har utført en session