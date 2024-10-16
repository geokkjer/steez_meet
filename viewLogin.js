function viewLogin(){
    header()
    document.getElementById('app').innerHTML += /*HTML*/ `<h1>Hello from Loginpage</h1>
    Brukernavn: <input type="text" id="username"><br>
    Passord: <input type="password" id=""><br>
    <button>Logg inn</button>
    `;
}