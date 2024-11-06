function viewLogin(){
    let username = model.input.logIn.userName;
    let password = '';
    loginHtml = /*HTML*/ `
    <div  class="login-OutsideContainer">
        <div class="login-Container">
            <div class="login-InfoField">
                <div>Brukernavn:</div>
                <div>Passord:</div>
            </div>
            <div class="login-InputField">
                <input class="login-InputFieldText" type="text" id="username" placeholder="Brukernavn" onchange="username=this.value">
                <input class="login-InputFieldText" type="password" id="password" placeholder="Passord" onchange="password=this.value">
            </div>
            <div class="login-buttonToRegister">
                <u onclick="viewRegister()">Registrere ny bruker </u>
            </div>
            <div class="login-buttonOther">
                <u><input type="checkbox"> Husk meg</u>
                <div> | </div>
                <u>Glemt passord</u>
            </div>
            <div class="login-buttonLogin">
                <button class="login-buttonToLogin" onclick="login(username,password)">Logg inn</button>
            </div>
            <div id="wrongInput"></div>
            </div>
    </div>
    `;
    document.getElementById('main').innerHTML =  loginHtml;
}

function login(user,pass){
    console.log(user,pass)
    
    for (modeluser of model.data.users){
        if (modeluser.userName == user && modeluser.password == pass){
            model.app.currentPage = "home";
            model.app.loggedInId = modeluser.id 
            console.log(model.app.loggedInId)
            updateView();
        } else if (modeluser.userName != user || modeluser.password != pass){
          
            drawWrongInput()
            
            console.log('Feil brukernavn eller passord :-P')
        }
    }
    
    
}

function drawWrongInput(){
let html = document.getElementById('wrongInput');
  html.innerHTML = /*html*/`
 <p class="blink">Feil brukernavn eller passord</p>
 
 
 `;

}