function header() {
    const slopeOptions = model.data.slopes.map(slope =>
        `<option value="${slope.id}">${slope.name}</option>`
    ).join('');

    let htmlHeader = /*HTML*/`
        <style>
        .dropdown {
            float: left;
            overflow: hidden;
        }
          
        .dropdown .dropbtn {
            font-size: 24px;  
            border: none;
            outline: none;
            color: white;
            padding: 14px 16px;
            background-color: inherit;
            font-family: inherit;
            margin: 0;
        }
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: black;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .dropdown-content a {
            float: none;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;
        }

        .dropdown-content a:hover {
            background-color: #ddd;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }
        </style>
        <nav class="headerbar" id="header">
            <ul>
                <li><img class="logo" src="img/logo.png"/></li>
                <li onmousedown="viewHome()"> Hjem </li>
                <li onclick="viewProfile()"> | Din Profil </li>
                <li id="login" onmousedown="viewLogin()">⎆ Login</li>
                <li onmousedown="viewNewEvent()"> | Legg til Event</li>
                <li>
                <div class="dropdown">
                    <button class="dropbtn" onchange="viewSlopeInfo(this.value)"> | ⛰ Velg Bakk </button>
                    <div class="dropdown-content">
                    ${slopeOptions}
                    </div>
                </div>
                </li> 
                <li>
                <select id="bakker" onchange="viewSlopeInfo(this.value)">
                    <option value="">⛰ Velg Bakke</option>
                    ${slopeOptions}
                </select>
                </li>
            </ul>
        </nav>`;

    document.getElementById('header').innerHTML = htmlHeader;
}