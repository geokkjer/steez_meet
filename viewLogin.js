function viewLogin(){
    header()
    let username = '';
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
        console.log(modeluser.firstName, modeluser.password)
        if (modeluser.userName == user && modeluser.password == pass){
            console.log('Hello', modeluser.firstName, model.password)
        }
    }
    // if (user = model.data.users){
    //     model.data.users
    // }
}

