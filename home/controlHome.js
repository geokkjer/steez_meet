let nameOfParticipants = [];
function getParticipantName(e) {
    nameOfParticipants.push(model.data.users.find(x => x.id == e).firstName);
}
function getParticipantsOfEvent(memebers) {
    if (memebers == null) {
        return /*HTML*/ `Ingen Deltakere Ennå`
    } else {
        nameOfParticipants = [];
        memebers.forEach((e) => getParticipantName(e));
        return /*HTML*/ `${nameOfParticipants}`
    }
}


function joinAnswer(answer) {
    let event = model.data.events.find((x) => x.id = x) /* Finn event id ?? onclick??*/
    if (answer == "ja") {
        if (model.app.isLoggedIn) {
            let id = model.app.loggedInId
            model.data.events[event].members.push(id)
        } else {
            viewLogin();
        }
        /* Finn bruker navn + sjekk om brukeren er logget inn */
    } else if (answer == "nei") {
        alert("You are a traitor of the free world")
    }
}





