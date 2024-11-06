let nameOfParticipants = [];
function getParticipantName(e) {
  nameOfParticipants.push(model.data.users.find((x) => x.id == e).firstName);
}
function getParticipantsOfEvent(members) {
  if (members == null) {
    return /*HTML*/ `Ingen Deltakere Ennå`;
  } else {
    nameOfParticipants = [];
    members.forEach((e) => getParticipantName(e));
    return /*HTML*/ `${nameOfParticipants}`;
  }
}

function joinAnswer(answer) {
  if (answer == "ja") {
    if (model.app.isLoggedIn) {
      let id = model.app.loggedInId;
      addUserToEvent(id);
    } else {
      viewLogin();
    }
  } else if (answer == "nei") {
    alert("You are a traitor of the free world");
  }
}

function addUserToEvent(id) {
  let eventId = model.app.currentEventId;
  if (
    model.data.events
      .find((x) => x.id == eventId)
      .members.includes(model.app.loggedInId)
  ) {
    console.log("Er allered på lista");
  } else {
    model.data.events
      .find((x) => x.id == eventId)
      .members.push(model.app.loggedInId);
  }
  updateView()
}
