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
        <select id="bakker" onchange="viewSlopeInfo()">
                <option>⛰Velg Bakke</option>
                <option onclick="viewSlopeInfo()">Bakke 1</option>
        </select>
        </ul>
        
   </nav>`
   return htmlHeader
}