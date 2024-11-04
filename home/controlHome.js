
function getParticipantName(e){ 
    let nameOfParticipants = model.data.users.find(x => x.id == e).firstName; 
    return nameOfParticipants;
}

function getParticipantsOfEvent() {
    let eventsID = model.data.events.find(x => x.id).members
    let participants = []
    participants.push(eventsID.forEach((e) => getParticipantName(e))); /* bruke id til å hente navn*/
    console.log(participants)
}

function JoinAnswer(answer){
    if(answer == "ja"){
        model.data.events[0].members.push(model.data.users[0].id) /* Finn bruker navn + sjekk om brukeren er logget inn */
    } else if(answer == "nei"){
        alert("You are a traitor of the free world")
    }
}



   

