function viewRegister(){
    header();
    document.getElementById('app').innerHTML += /*HTML */ `
    <div>Brukernavn: <input type="text" onchange="userName=this.value"/></div>
    <div>Fornavn: <input input type="text" onchange="firstName=this.value"/></div>
    <div>Etternavn: <input input type="text" onchange="lastName=this.value"/></div>
    <div>Adresse: <input input type="text" onchange="homeAdress=this.value"/></div>
    <div>Telefonnummer: <input input type="text" onchange="phoneNumber=this.value"/></div>
    <div>Epost: <input input type="text" onchange="emailAdress=this.value"/></div>
    <div>Passord: <input input type="text" onchange="password=this.value"/></div>
    <div>Bekreft passord: <input input type="text" onchange="password2=this.value"/></div>
    <div>Last opp profilbilde</div>
    <button onclick="addNewUser(userName, firstName, lastName, homeAdress, phoneNumber, emailAdress, password, password2)">Lagre</button>
    `
    ; 
}

//Sjekker for at det som er skrevet inn i email faktisk er en email
//Sjekker at passord 1 stemmer overens med passord 2