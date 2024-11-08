function drawHome() {
  document.getElementById("main").innerHTML = /*html*/ `
    ${drawGreeting()}
    <div id="grid">${drawActivities()}</div>
   
    `;
}
function drawGreeting() {
  return (htmlHome = /*HTML*/ `
        <div class="homeHeader">
        ${greetingByName()}
        <h2>Kommende turer: </h2>
        </div>
      `);
}
function drawActivities() {
  let html = "";
  let activities = model.data.events;
  for (i = 0; i < activities.length; i++) {
    html += /*html*/ `
            <div class="column1">
                <h4>${activities[i].name}</h4>
                <img src="${getSlopePhotoById(activities[i].id)}">
                <p><span>Kommentar: </span>${getCommentById(
                  activities[i].id
                )}</p>
            </div>
            <div class="column2">
                <p><span>Når: </span>${activities[i].date}</p>
                <p><span>Kommentarer: </span>${getCommentsById(
                  activities[i].id
                )}</p>
            </div>
            <div class="column3">
                <h2>Deltakere</h2>
                    <p id="part"> ${getParticipantsOfEvent(
                      activities[i].members
                    )}</p>
                 ${yesNoButtons(i)}
            </div> `;
  }
  return html;
}
function yesNoButtons(i){
  let eventId = 0;
  eventId = model.data.events[i].id;
  return /*html*/ `
      <h4>Bli med ?</h4>
      <button value="ja" onclick="joinAnswer(this.value), model.app.currentEventId = ${eventId}" class="yes-noBtn">Ja</button>
      <button value="nei" onclick="joinAnswer(this.value)" class="yes-noBtn">Nei</button>
      `;
}
function getSlopePhotoById(id) {
  let slopeId = parseInt(model.data.events.find((x) => x.id == id).slope);
  let imgLink = "";
  imgLink =
    model.data.slopes.find((x) => x.id === slopeId).photo != undefined
      ? model.data.slopes.find((x) => x.id === slopeId).photo
      : "img/slope1.png";
  return imgLink;
}

function getCommentById(id) {
  let html = "";
  let slope = model.data.events.find((x) => x.id == id).slope;
  let slopeComments = model.data.slopes.find((x) => x.id == slope).comment;
  for (let i = 0; i < slopeComments.length; i++) {
    html += /*HTML*/ `<p>${slopeComments[i].comment}</p>`;
  }
  return html;
}

function getCommentsById(id) {
  let html = "";
  let slopeComments = model.data.events.find((x) => x.id == id).comment;
  for (let i = 0; i < slopeComments.length; i++) {
    html += /*html*/ `${slopeComments[i].comment}`;
  }
  return html;
}

function getDescriptionById(id) {
  let html = "";
  let slope = model.data.events.find((x) => x.id == id).slope;
  console.log(`slope found ${slope}`);
}

function greetingByName() {
  if (model.app.isLoggedIn) {
    let id = model.app.loggedInId;
    let name = model.data.users.find((x) => x.id == id).firstName;
    return /*html*/ `<h1>Hei, ${name}</h1>`;
  } else {
    return /*html*/ `<h1>Hei, gjest. Vennligst logg inn er du snill</h1>`;
  }
}
