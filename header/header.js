function header() {
    const slopeOptions = model.data.slopes.map(slope =>
        `<div onclick="viewSlopeInfo(${slope.id})" value="${slope.id}">${slope.name}</div>`
    ).join('');

    let htmlHeader = /*HTML*/`

        <header class="headerbar" id="header">
            <ul>
                <li><img class="logo" src="img/logo.png"/></li>
                <li onmousedown="drawHome()">Hjem</li>
                <li onclick="viewProfile()">Din Profil</li>
                <li onmousedown="viewNewEvent()">Legg til Event</li>
                <li>
                <div class="dropdown">
                    <button class="dropbtn">Velg Bakke</button>
                    <div class="dropdown-content">
                    ${slopeOptions}
                    </div>
                </div>
                <li id="login" onmousedown="viewLogin()">⎆ Login</li>
                </li> 
            </ul>
        </header>`;

    document.getElementById('header').innerHTML = htmlHeader;
}