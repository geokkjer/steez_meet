function viewProfile() {
    header();
    document.getElementById('app').innerHTML += /*HTML */ `
    <img src= "${model.data.users[0].profilePicture}">
    <div>Personalia:</div>
    <div>Navn: ${model.data.users[0].firstName} ${model.data.users[0].lastName}</div>
    <div>Epost: ${model.data.users[0].email}</div>
    <div>Adresse: ${model.data.users[0].address}</div>
    <div>Mobil: ${model.data.users[0].phoneNumber}</div>
    <div>Dine arrangementer:</div>
    <div>${model.data.users[0].myEvents}</div>
    <div>Påmeldte arrangementer:</div>
    <div>${model.data.users[0].eventsAttending}</div>
    <div>Mål:</div>
    <button onclick="createGoal()">+</button>
    `
    ; 
}

function createGoal(){
    let goalName = '';
    let goalDescription = '';
    let goalAmount = null;
    header();
    document.getElementById('app').innerHTML += /*HTML */ `
    <img src= "${model.data.users[0].profilePicture}">
    <div>Personalia:</div>
    <div>Navn: ${model.data.users[0].firstName} ${model.data.users[0].lastName}</div>
    <div>Epost: ${model.data.users[0].email}</div>
    <div>Adresse: ${model.data.users[0].address}</div>
    <div>Mobil: ${model.data.users[0].phoneNumber}</div>
    <div>Dine arrangementer:</div>
    <div>${model.data.users[0].myEvents}</div>
    <div>Påmeldte arrangementer:</div>
    <div>${model.data.users[0].eventsAttending}</div>
    <div>Ditt mål:</div>
    <input type="text" placeholder="Skriv inn ditt mål" onchange="goalName=this.value">
    <div>Beskrivelse:</div>
    <textarea type="text" placeholder="Beskriv ditt mål" onchange="goalDescription=this.value"></textarea>
    <div>Antall utførelser:</div>
    <input type="number" onchange="goalAmount=this.value">
    <button onclick="saveGoal(goalName, goalDescription, goalAmount)">Lagre</button>
    `
    ; 
}

//Vi trenger

//Inputfelt - tittel
//Inputfelt - beskrivelse
//Mulighet for å sette antall
//Muligfhet for å måle progresjon
//Mulighet for å checke av når man har utført en session