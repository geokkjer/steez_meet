let nameOfParticipants = [];
function getParticipantName(e) {
    nameOfParticipants.push(model.data.users.find(x => x.id == e).firstName);
}
function getParticipantsOfEvent() {
    nameOfParticipants = [];
    let eventsID = model.data.events.find(x => x.id).members;
    let participants = [];
    participants.push(eventsID.forEach((e) => getParticipantName(e))); /* bruke id til å hente navn*/
    return /*HTML*/ `${nameOfParticipants}`
}



function showParticipants(part){
    let html ='';
    // document.getElementById('part').innerHTML = /*html*/ `<h1> ${part}</h1>`;
    return html = /*html*/ `<h1> ${part}</h1>`
   
}

function joinAnswer(answer) {
    if (answer == "ja") {
        model.data.events[0].members.push(model.data.users[0].id) /* Finn bruker navn + sjekk om brukeren er logget inn */
    } else if (answer == "nei") {
        alert("You are a traitor of the free world")
    }
}





