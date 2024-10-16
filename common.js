function header() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <link rel="stylesheet" href="header.css">
    <div class="topnav" id="header">
        <a href="#home"><img class="logo" src="img/logo.png"/></a>
        <a href="#home" onclick="model.app.currentPage = 'home';updateView()">🏠 Hjem</a>
        <a href="#profile" onclick="model.app.currentPage = 'profile';updateView()">🛈 Din Profil</a>
        <a href="#slopes" onclick="model.app.currentPage = 'slopes';updateView()">⛰ Bakker</a>
        <a href="#" id="login" onclick="model.app.currentPage = 'login';updateView()">⎆ Login</a>
        <a href="#" id="newevent" onclick="model.app.currentPage = 'newevent';updateView()">Legg til Event</a>
   </div>`
}
