function viewRegister(){
    header();
    document.getElementById('app').innerHTML += /*HTML */ `
    <div>Brulernavn: <input/></div>
    <div>Fornavn: <input/></div>
    <div>Etternavn: <input/></div>
    <div>Adresse: <input/></div>
    <div>Telefonnummer: <input/></div>
    <div>Epost: <input/></div>
    <div>Passord: <input/></div>
    <div>Bekreft passord: <input/></div>
    <div>Last opp profilbilde</div>
    `
    ; 
}