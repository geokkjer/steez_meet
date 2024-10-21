function header() {
    htmlHeader = /*HTML*/`
    <link rel="stylesheet" href="header/header.css">
    <div class="headerbar" id="header">
        <ul>
        <li><img class="logo" src="img/logo.png"/></a></li>
        <li onmousedown="viewHome()">🏠 Hjem</li>
        <li onclick="viewProfile()">🛈 Din Profil</li>
        <li>
            <select onchange="viewSlopeInfo()">  
                <option value="Velg" selected="selected">⛰Velg Bakke</option>
                <option>Bakke 1</option>
            </select>
        </li>
        <li id="login">⎆ Login</li>
        <li>Legg til Event</li>
        </ul>
   </div>`
   return htmlHeader
}