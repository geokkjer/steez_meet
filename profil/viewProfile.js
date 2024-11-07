function drawProfile(){

}

function viewProfile() {
    if(isLoggedInCheck()){
        profileHtml = /*HTML */ `
        <div class="profile-outsideContainer">
            <div class="profile-container">
                <div class="profile-profilePic">
                    <img class="profile-imageClass" src= "${model.data.users[0].profilePicture}">
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
                <div>${model.data.events[0].name}<button class="profile-buttonPaddingContainer">Endre</button></div>
            </div>
            <div class="profile-eventsAttending">
                <b>Påmeldte arrangementer:</b>
                <div>${model.data.events[0].name}<button class="profile-buttonPaddingContainer">Avmeld</button></div>
            </div>
        </div>

        <div class="profile-goals" id="profileGoal">
            <div class="profile-goalsTitleContainer">
                <b>Mål:</b>
                <button class="profile-addButton" onclick="createGoal()">+</button>
            </div>

            <div class="profile-goalsDescriptionContainer">
                <div>${model.data.users[0].goals.title}</div>
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
                    <option value="Kong Harald">Kong Harald</option>
                    <option value="Lille Marius">Lille Marius</option>
                </select>
                <button class="profile-addButton" onclick="pickFriend()">+</button>
            </div>
            
            <div>
                <div class="profile-myFriendsHeader">
                    <button onclick="sortFriends()">A - Z</button>
                </div>
                    <b>Mine venner:</b>
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
        <textarea type="text" placeholder="Beskrivelse..." onchange="goalDescription=this.value"></textarea>
            <div class="profile-newGoalAmount">
                <div>Antall utførelser:</div>
                <input type="number" onchange="goalAmount=this.value">
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