function header() {
    htmlHeader = /*HTML*/`
    <nav class="headerbar" id="header">
        <ul>
        <li><img class="logo" src="img/logo.png"/></li>
        <li onmousedown="viewHome()"> Hjem </li>
        <li onclick="viewProfile()"> | Din Profil </li>
        <li id="login" onmousedown="viewLogin()">⎆ Login</li>
        <li onmousedown="viewNewEvent()"> | Legg til Event</li>
        <select id="bakker" onchange="viewSlopeInfo()">
                <option> ⛰Velg Bakke </option>
                <option onclick="viewSlopeInfo()">Bakke 1</option>
        </select>
        </ul>
   </nav>`;
   return document.getElementById('header').innerHTML = htmlHeader; 
}