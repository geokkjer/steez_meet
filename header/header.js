function header() {
    htmlHeader = /*HTML*/`
    <link rel="stylesheet" href="header/header.css">
    <nav class="headerbar" id="header">
        <ul>
        <li><img class="logo" src="img/logo.png"/></a></li>
        <li class="active" onmousedown="viewHome()">🏠 Hjem</li>
        <li onclick="viewProfile()">🛈 Din Profil</li>
        <li id="login" onmousedown="viewLogin()">⎆ Login</li>
        <li>Legg til Event</li>
        <select>⛰Bakker 
            <ul class="drop">
                <li onclick="viewSlopeInfo()">Bakke 1</li>
            </ul>
        </select>
        </ul>
        
   </nav>`
   return htmlHeader
}