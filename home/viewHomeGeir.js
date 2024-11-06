function drawHome() {
  document.getElementById("main").innerHTML = /*html*/ `
    ${drawGreeting()}
    <div id="grid">${drawActivities()}</div>
   
    `;
}

function drawGreeting() {
  return (htmlHome = /*HTML*/ `
        <h1>Hei, ${"hello" || "guest"}</h1>
        <h2>Kommende turer: </h2>
        `);
}
function drawActivities() {
  let html = "";
  let activities = model.data.events;
  for (i = 0; i < activities.length; i++) {
    console.log(activities[i].id);
    html += /*html*/ `
          <div class="column1">
              <h4>${activities[i].name}</h4>
              <img src="${getSlopePhotoById(activities[i].id)}">
              <p><span>Kommentar: </span>${getCommentById(activities[i].id)}</p>
          </div>
          <div class="column2">
              <p><span>Når: </span>${activities[i].date}</p>
              <p><span>Beskrivelse: </span>${getDescriptionById(
                activities[i].id
              )}</p>
          </div>
          <div class="column3">
              <h2>Deltakere</h2>
                  <p id="part"> ${getParticipantsOfEvent(
                    activities[i].members
                  )}</p>
              <h4>Bli med ?</h4>
                 <button value="ja" onclick="joinAnswer(this.value)" class="yes-noBtn">Ja</button>
                 <button value="nei" onclick="joinAnswer(this.value)" class="yes-noBtn">Nei</button>
          </div> `;
  }
  return html;
}

function getSlopePhotoById(id) {
  let slopeId = model.data.events.find((x) => x.id == id).slope;
  console.log(`slopeID ${slopeId}`);
  let imgLink = "";
  imgLink = model.data.slopes.find((x) => x.id === slopeId).photo;
  console.log(imgLink);
 
}

function getCommentById(id) {
  let html = "";
  let slope = model.data.events.find((x) => (x.id = id)).slope;
  let slopeComments = model.data.slopes.find((x) => (x.id = slope)).comment;
  for (let i = 0; i < slopeComments.length; i++) {
    html += /*HTML*/ `<p>${slopeComments[i].comment}</p>`;
  }
  return html;
}

function getDescriptionById() {}
