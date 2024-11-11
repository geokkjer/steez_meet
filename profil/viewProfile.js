function drawProfile(){

}

function viewProfile() {
    if(isLoggedInCheck()){
        profileHtml = /*HTML */ `
        <div class="profile-outsideContainer">
        <div class="profile-container">
            <div class="profile-profilePic">
                ${drawProfilePicture()}
            </div>
            <div class="profile-bio">
                ${drawBio()}
            </div>
            <div class="profile-events">
                <div class="profile-eventsAddButtonContainer">
                    <button onclick="eventOnProfile()">Nytt arrangement</button>
            </div>
            <div class="profile-eventsYourEvents">
                <b>Dine arrangementer:</b>
                <div>${showEvent()}<button class="profile-buttonPaddingContainer" onclick="customizeEvent()">Endre</button></div>
            </div>
            <div class="profile-eventsAttending">
                <b>Påmeldte arrangementer:</b>
                <div>${model.data.events[0].name}<button class="profile-buttonPaddingContainer" onclick="unsubscribe()">Avmeld</button></div>
            </div>
        </div>

        <div class="profile-goals" id="profileGoal">
            <div class="profile-goalsTitleContainer">
                <b>Mål:</b>
                <button class="profile-addButton" onclick="createGoal()">+</button>
            </div>

            <div class="profile-goalsDescriptionContainer">
                <div><b>${model.data.users[0].goals.title}</b></div>
                <div>${model.data.users[0].goals.description}</div>
            </div>

            <div class="profile-goalsDoneTitleContainer">
                <b>Ganger utført:<b>
            </div>

            <div class="profile-goalsCheckboxContainer">
                <div>${model.data.users[0].goals.amount}</div>
                <div>${createGoalAmount()}</div>
                <button onclick="checkboxesChecked()">✔</button>
            </div>

            <div class="profile-goalsProgressbarContainer">
                <div class="progress">
                    <div class="progressDone" id="progressDone"></div>
                </div>
            </div>
        </div>

        <div class="profile-friends">
            <div class="profile-friendsSelection">
                <select id="selectFriendName">
                    <option value="">Velg et navn:</option>
                    <option value="Kjartan Salto">Kjartan Salto</option>
                    <option value="Tor Snøplanke">Tor Snøplanke</option>
                    <option value="Hoppalong Sprettnes">Hoppalong Sprettnes</option>
                    <option value="Terje Kolderup">Terje Kolderup</option>
                    <option value="Eskil Domben">Eskil Domben</option>
                    <option value="Geir Sollid">Geir Sollid</option>
                    <option value="Anita Endresen Rowe">Anita Endresen Rowe</option>
                    <option value="Marie Askjem">Marie Askjem</option>
                    <option value="Linn Eidsten">Linn Eidsten</option>
                    <option value="Stian Sundby">Stian Sundby</option>
                    <option value="Martin Innvær">Martin Innvær</option>
                    <option value="Ole Hagen">Ole Hagen</option>
                    <option value="Ellen Ragne Fakset">Ellen Ragne Fakset</option>
                    <option value="Natalia Leikis">Natalia Leikis</option>
                    <option value="Ellie Marie Pedersen">Ellie Marie Pedersen</option>
                    <option value="Erlend Guttulsrud Kristiansen">Erlend Guttulsrud Kristiansen</option>
                </select>
                <button class="profile-addButton" onclick="pickFriend()">+</button>
            </div>
            
            <div>
                <div class="profile-myFriendsHeader">
                    <button onclick="sortFriends()">A - Z</button>
                </div>
                    <h3><b>Mine venner:</b></h3>
                <ul id="friendList"></ul>
            </div>
        </div>
    </div>
    `
    ;
    document.getElementById('main').innerHTML = profileHtml;} else {
        viewLogin();
    }
}
function drawProfilePicture(){
    let html = '';
    getUserdataByloggedInId();
    let user = model.app.userData;
    html = /*html*/ `
        <img class="profile-imageClass" src= "${user.profilePicture}">`;
    return html
}
function drawBio(){
    getUserdataByloggedInId();
    let user = model.app.userData;
    let html = ''
    html = /*html*/ `
        <div>
            <div><b>Navn:</b> ${user.firstName} ${user.lastName}</div>
            <div><b>Epost:</b> ${user.email}</div>
            <div><b>Adresse:</b> ${user.address}</div>
            <div><b>Mobil:</b> ${user.phoneNumber}</div>
        </div>
            <div class="profile-editUserButton">
                <button onclick="viewRegister()">Rediger profil</button>
            </div>`;
    return html
}
function createGoal(){
    goalHtml= /*HTML */ `

    <div class="profile-createNewGoal">
        <input type="text" placeholder="Ditt mål" onchange="goalName=this.value">
        <textarea type="text" rows="6" cols="27" placeholder="Beskrivelse..." onchange="goalDescription=this.value"></textarea>
            <div class="profile-newGoalAmount">
                <input placeholder="Antall utførelser" type="number" onchange="goalAmount=this.value" min="1" max="10" style="width: 150px;">
                <button onclick="saveGoal(goalName, goalDescription, goalAmount)">Lagre</button>
            </div>
    </div>
    `
    ;
    document.getElementById('profileGoal').innerHTML = goalHtml;
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
        alert("Du har allerede lagt til denne personen");
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

function eventOnProfile(){
     viewNewEvent();
    }
function customizeEvent(){
    viewNewEvent();
    
    
    }
