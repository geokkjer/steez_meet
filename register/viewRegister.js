function viewRegister(){
    registerHtml = /*HTML */ `
    <div>Brukernavn: <input type="text" onchange="model.input.registerUser.userName = this.value"/></div>
    <div>Fornavn: <input type="text" onchange="model.input.registerUser.firstName = this.value"/></div>
    <div>Etternavn: <input type="text" onchange="model.input.registerUser.lastName = this.value"/></div>
    <div>Adresse: <input type="text" onchange="model.input.registerUser.address = this.value"/></div>
    <div>Telefonnummer: <input type="text" onchange="model.input.registerUser.phoneNumber = this.value"/></div>
    <div>Epost: <input type="email" onchange="model.input.registerUser.email = this.value"/></div>
    <div>Passord: <input type="password" onchange="model.input.registerUser.password = this.value"/></div>
    <div>Bekreft passord: <input type="password" onchange="model.input.registerUser.confirmPassword = this.value"/></div>
    <div>Last opp profilbilde</div> //Skal vi ha dette når man lager en bruker?
    <button onclick="checkUserData()">Registrer</button>
    `
    ; 
    document.getElementById('app').innerHTML = header() + registerHtml;
}

//Sett html + header nederst - sjekk viewLogin
//Sjekker for at det som er skrevet inn i email faktisk er en email