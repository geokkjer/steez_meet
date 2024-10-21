function viewLogin(){
    header()
    let username = model.input.logIn.userName;
    let password = '';
    document.getElementById('app').innerHTML += /*HTML*/ `<h1>Hello from Loginpage</h1>
    Brukernavn: <input type="text" id="username" placeholder="Brukernavn" onchange="username=this.value"><br>
    Passord: <input type="password" id="password" placeholder="Passord" onchange="password=this.value"><br>
    <button onclick="login(username,password)">Logg inn</button><br>
    <div>husk meg! glemt passord ? registrere ny bruker </div>
    `;
}

function login(user,pass){
    console.log(user,pass);
    for (modeluser of model.data.users){
        if (modeluser.userName == user && modeluser.password == pass){
            updateView();
        } else if (modeluser.userName != user || modeluser.password != pass){
            console.log('Feil brukernavn eller passord :-P')
        }
    }
}

