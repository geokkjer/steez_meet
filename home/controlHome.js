function getParticipantName(e){ 
    let nameOfParticipants = model.data.users.find(x => x.id == e).firstName; 
    document.getElementById('1').innerHTML += nameOfParticipants;
}

function getParticipantsOfEvent() {
    let eventsID = model.data.events.find(x => x.id).members
    let participants = []
    participants.push(eventsID.forEach((e) => getParticipantName(e)));
}

function JoinAnswer(answer){
    if(answer == "ja"){
        model.data.events[0].members.push(model.data.users[0].id)
    } else if(answer == "nei"){
        alert("You are a traitor of the free world")
    }





}



   

