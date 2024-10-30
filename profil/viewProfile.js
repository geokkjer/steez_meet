function viewProfile() {
    profileHtml = /*HTML */ `

        <img src= "${model.data.users[0].profilePicture}" width="200px">
    <div>
        <div><b>Navn:</b> ${model.data.users[0].firstName} ${model.data.users[0].lastName}</div>
        <div><b>Epost:</b> ${model.data.users[0].email}</div>
        <div><b>Adresse:</b> ${model.data.users[0].address}</div>
        <div><b>Mobil:</b> ${model.data.users[0].phoneNumber}</div>
    </div>
    <br>

    <div><b>Dine arrangementer:</b>
        <div>${model.data.events[0].name}</div>
        <b>Påmeldte arrangementer:</b>
        <div>${model.data.events[0].name}</div>
    </div>
    <br>

    <b>Mål:</b>
        <div>${model.data.users[0].goals.title}</div>
        <div>${model.data.users[0].goals.description}</div>
        <br>
        <b>Ganger utført:<b>
        <div>${createGoalAmount()}</div>
        <button onclick="checkboxesChecked()">Lagre utførelser</button>
        <div>${model.data.users[0].goals.amount}</div>
        <div class="progress">
        <div class="progressDone" id="progressDone"></div>
        </div>
        <button onclick="createGoal()">+</button>

    <br>
    <h1>Legg til venner her:</h1>
    <select id="selectFriendName">
        <option value="">Velg et navn:</option>
        <option value="Kjartan Salto">Kjartan Salto</option>
        <option value="Tor Snøplanke">Tor Snøplanke</option>
        <option value="Hoppalong Sprettnes">Hoppalong Sprettnes</option>
        <option value="Terje Kolderup">Terje Kolderup</option>
        <option value="Kong Harald">Kong Harald</option>
        <option value="Lille Marius">Lille Marius</option>
    </select>
    <button onclick="pickFriend()">Legg til venn</button>
    
    <h2>Venner du har lagt til:</h2>
    <button onclick="sortFriends()">Sortèr navn alfabetisk</button>
    <ul id="friendList"></ul>
    `
    ;
    document.getElementById('main').innerHTML = profileHtml;
}

function createGoal(){
    goalHtml= /*HTML */ `

    <div>Ditt mål:</div>
    <input type="text" placeholder="Skriv inn ditt mål" onchange="goalName=this.value">
    <div>Beskrivelse:</div>
    <textarea type="text" placeholder="Beskriv ditt mål" onchange="goalDescription=this.value"></textarea>
    <div>Antall utførelser:</div>
    <input type="number" onchange="goalAmount=this.value">
    <button onclick="saveGoal(goalName, goalDescription, goalAmount)">Lagre</button>
    `
    ;
    document.getElementById('main').innerHTML = profileHtml + goalHtml;
}

function createGoalAmount(){
    let goalAmount = model.data.users[0].goals.amount;
    let checkboxesHtml = '';
    for(let i = 0; i<goalAmount; i++)
        {
        checkboxesHtml += /*HTML*/ `
        <input id="myCheckBoxes" type="checkbox"/>
        `
        ;
    }
    return checkboxesHtml;
    
}

let friendsListArray = [];
function pickFriend() {
    let yourSelectedName = document.getElementById('selectFriendName').value;
    let friendList = document.getElementById('friendList');

    if (yourSelectedName === "") {
        alert("Du har ikke valgt noe navn");
    }
    else if (friendsListArray.includes(yourSelectedName)) {
        alert("Du har allerede lagt til denne vennen");
    }
    else if (!friendsListArray.includes(yourSelectedName)) {
        friendList.innerHTML += `<li>${yourSelectedName}</li>`;
        friendsListArray.push(yourSelectedName);
    }
}
function sortFriends() {
        friendsListArray.sort(); // .sort() sorterer alfabestisk by default
        renderFriendsList();     
}
function renderFriendsList() {
    let friendList = document.getElementById('friendList');
        friendList.innerHTML = ""; 
        
        friendsListArray.forEach(friend => {
        friendList.innerHTML += `<li>${friend}</li>`;
    });
}