function header() {
    const slopeOptions = model.data.slopes.map(slope =>
        `<div onclick="viewSlopeInfo(this.value)" value="${slope.id}">${slope.name}</div>`
    ).join('');

    let htmlHeader = /*HTML*/`

        <nav class="new-header" id="header">
        <div class="innerHeader">
            <ul class="header-navigation">
                <li><img class="logo" src="img/logo.png"/></li>
                <li onmousedown="drawHome()"> Hjem </li>
                <li onclick="viewProfile()"> | Din Profil </li>
                <li onmousedown="viewNewEvent()"> | Legg til Event</li>
                <li>
                <div class="dropdown">
                    <button class="dropbtn"> | ⛰ Velg Bakke </button>
                    <div class="dropdown-content">
                    ${slopeOptions}
                    </div>
                </div>
                </li> 
                <li id="login" onmousedown="viewLogin()">⎆ Login</li>
            </ul>
            </div>
        </nav>`;

    document.getElementById('header').innerHTML = htmlHeader;
}