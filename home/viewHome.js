function viewHome() {
    let activities = model.data.events;
    let members = model.data.events[0].members
    let htmlHome = /*HTML*/`
        <h1>Hei, ${'hello' || 'guest'}</h1>
        <h2>Kommende turer: </h2>
        `;
    let activitiesHTML = activities.map(activity => /*HTML*/`
        <div id="grid">
            <div class="column1">
                <h4>${activity.name}</h4>
                <img src="${model.data.slopes[0].photo}">
                </div>
            <div class="column2">
                <p><span>Når: </span>${activity.date}</p>
                <p><span>Beskrivelse: </span>${model.data.slopes[0].description}</p>
            </div>
            <div class="column3">
                <h2>Deltakere</h2>
                <p>${activity.members}</p>
                <h4>Bli med ?</h4>
                <div></div>
                <button value="ja" onclick="JoinAnswer(this.value)">Ja</button>
                <button value="nei" onclick="JoinAnswer(this.value)">Nei</button>
            </div>
        </div>`
    ).join('');

    document.getElementById('main').innerHTML = htmlHome + activitiesHTML;
    getParticipantsOfEvent();
}


function getParticipantsOfEvent(){
    let participants = [];
    let events = model.data.events
    for (e of events){
        document.getElementById('main').innerHTML += `${e.members}`;
    }
}

{/* <div>
            
<p><span>Vanskelig: </span>${activity.difficulty}</p>

<p><span>Omtaler: </span>Ikke på plass enda..</p>

</div> */}