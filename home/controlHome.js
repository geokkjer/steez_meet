let nameOfParticipants = [];
function getParticipantName(e) {
    nameOfParticipants.push(model.data.users.find(x => x.id == e).firstName);
}
function getParticipantsOfEvent(members) {
    if (members == null) {
        return /*HTML*/ `Ingen Deltakere Ennå`
    } else {
        nameOfParticipants = [];
        members.forEach((e) => getParticipantName(e));
        return /*HTML*/ `${nameOfParticipants}`
    }
}


function joinAnswer(answer) {

    if (answer == "ja") {
        if (model.app.isLoggedIn) {
            let id = model.app.loggedInId
            model.data.events[0].members.push(id)
        } else {
            viewLogin();
        }
        /* Finn bruker navn + sjekk om brukeren er logget inn */
    } else if (answer == "nei") {
        alert("You are a traitor of the free world")
    }
}





