function header() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <link rel="stylesheet" href="header.css">
    <div class="topnav" id="myTopnav">
        <a href="#home" onclick="updateView('home')">🏠 Hjem</a>
        <a href="#profile" onclick="updateView('profile')">🛈 Din Profil</a>
        <a href="#slopes">⛰ Bakker</a>
        <a href="#" id="login" onclick="model.app.currentPage = 'login';updateView()">⎆ Login</a>
   </div>`
}
