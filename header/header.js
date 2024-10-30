function header() {
   
    const slopeOptions = model.data.slopes.map(slope => 
        `<option value="${slope.id}">${slope.name}</option>`
    ).join('');

    let htmlHeader = /*HTML*/`
        <nav class="headerbar" id="header">
            <ul>
                <li><img class="logo" src="img/logo.png"/></li>
                <li onmousedown="viewHome()"> Hjem </li>
                <li onclick="viewProfile()"> | Din Profil </li>
                <li id="login" onmousedown="viewLogin()">⎆ Login</li>
                <li onmousedown="viewNewEvent()"> | Legg til Event</li>
                <select id="bakker" onchange="viewSlopeInfo(this.value)">
                    <option value="">⛰ Velg Bakke</option>
                    ${slopeOptions}
                </select>
            </ul>
        </nav>`;

    document.getElementById('header').innerHTML = htmlHeader;
}