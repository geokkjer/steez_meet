function header() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <link rel="stylesheet" href="header.css">
    <div class="topnav" id="header">
        <img class="logo" src="img/logo.png"/>
        <a href="#home" onclick="model.app.currentPage = 'home';updateView()">🏠 Hjem</a>
        <a href="#profile" onclick="updateView()">🛈 Din Profil</a>
        <a href="#slopes">⛰ Bakker</a>
        <a href="#" id="login" onclick="model.app.currentPage = 'login';updateView()">⎆ Login</a>
   </div>`
}
