function drawHome() {
    document.getElementById('main').innerHTML = /*html*/`
    ${drawGreeting()}
    <div id="grid">${drawActivities()}</div>
   
    `;
}

function drawGreeting() {
    return htmlHome = /*HTML*/`
         <h1>Hei, ${'hello' || 'guest'}</h1>
         <h2>Kommende turer: </h2>
        `;
}       
function drawActivities() {
    let html = "";
    let activities = model.data.events;
    for (i = 0; i < activities.length; i++) {
      console.log(activities[i].id);
      html += /*html*/ `
          <div class="column1">
              <h4>${activities[i].name}</h4>
              <b>${getSlopeNameById(activities[i].slope)}</b>
              <img src="${getSlopePhotoById(activities[i].id)}">
          </div>
          <div class="column2">
              <p><span>Når: </span>${activities[i].date}</p>
              <p><span>Beskrivelse: </span>${PrintComment(activities[i].comment)}</p>
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
// function drawActivities() {
//     let activities = model.data.events;
//     return activityHTML = activities.map(activity => /*HTML*/`
//         <h2>Kommende turer: </h2>
//         <div id="grid">
//             <div class="column1">
//                 <h4>${activity.name}</h4>
//                 <img src="${model.data.slopes[0].photo}">
//                 </div>
//             <div class="column2">
//                 <p><span>Når: </span>${activity.date}</p>
//                 <p><span>Beskrivelse: </span>${model.data.slopes[0].description}</p>
//             </div>
//             <div class="column3">
//                 <h2>Deltakere</h2>
//                 <p id="part"> ${getParticipantsOfEvent()}</p>
//                 <h4>Bli med ?</h4>
//                 <button value="ja" onclick="joinAnswer(this.value)" class="yes-noBtn">Ja</button>
//                 <button value="nei" onclick="joinAnswer(this.value)" class="yes-noBtn">Nei</button>
//             </div>
//         </div>`
//     ).join('');
// }
function getSlopePhotoById(id) {
    let slopeId = model.data.events.find((x) => x.id == id).slope;
    console.log(`slopeID ${slopeId}`)
    let imgLink = "";
    imgLink = model.data.slopes.find((x) => (x.id = slopeId)).photo;
    console.log(imgLink);
    return imgLink;
  }
  function getSlopeNameById(slopeId) {
    let id = parseInt(slopeId)
    let slope = model.data.slopes.find((x) => x.id == id);
    let slopeName = "";
    if(slope.name){
         slopeName = slope.name;
    }
   
    
    console.log("id: "+ id);
    console.log("slope: "+slope);
    
    return slopeName;
  }

  function getCommentById(id) {
    let slopeId = model.data.events.find((x) => x.id == id).slope;
    console.log(`slopeID ${slopeId}`)
    let slopeCommment = "";
    slopeCommment = model.data.slopes.find((x) => (x.id = slopeId)).comment;
    console.log(slopeCommment);
    return slopeCommment;
  }
  