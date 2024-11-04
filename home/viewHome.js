function viewHome() {
    let activities = model.data.events; 
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
                <button value="ja" onclick="joinAnswer(this.value)" class="yes-noBtn">Ja</button>
                <button value="nei" onclick="joinAnswer(this.value)" class="yes-noBtn">Nei</button>
            </div>
        </div>`
    ).join('');
    document.getElementById('main').innerHTML = htmlHome + activitiesHTML;

}