function viewLogin(){
    header()
    let username = '';
    let password = '';
    document.getElementById('app').innerHTML += /*HTML*/ `<h1>Hello from Loginpage</h1>
    Brukernavn: <input type="text" id="username" onchange="username=this.value"><br>
    Passord: <input type="password" id="password" onchange="password=this.value"><br>
    <button onclick="login(username,password)">Logg inn</button>
    `;
}

function login(user,pass){
    console.log(user,pass);
}

