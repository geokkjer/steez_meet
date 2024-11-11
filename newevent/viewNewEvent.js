
function viewNewEvent() {
  
  let html = /*html*/ `
  <div class="newEvent-outsideContainer">
    <div class="newEvent-container">
      <div class="newEvent-titleContainer">
        <h2>Nytt arrangement: </h2>
      </div>
      <div>${showAddEvent()}</div>
    </div>
  </div>
    `;
  document.getElementById("main").innerHTML = html;
}

function showEvent() {
  let events = model.data.events;
  let html = "";
    html += /*html*/ `
    <div class="newEventInput-container">
    <p>Navn: ${events[events.length-1].name}</p>
    <p>Dato: ${events[events.length-1].date}</p>
    <p>Bakke: ${findSlopes(events[events.length-1].slope)}</p>
    <p>Kommentar: ${PrintComment(events[events.length-1].comment)}</p>
    </div>
    `;
  
return html;
}
function findSlopes(slopeId){
  const slope = model.data.slopes.find((x) => x.id == slopeId);
  return slope ? slope.name : `Slope with ID ${slopeId} not found`;
}

function showAddEvent() {
  const slopeOptions = model.data.slopes.map(slope =>
    `<option onclick="viewSlopeInfo(this.value)" value="${slope.id}">${slope.name}</option>`
).join('');
  let html = "";
  html += /*html*/ `
  <div class="newEvent-inputContainer">
    <div class="newEvent-inputField">
      <div class="newEvent-name">
      </div>
        <input class="newEvent-inputStyling" placeholder="Navn" type="text" onchange="model.input.newEvent.name = this.value">

      <div class="newEvent-date">
      </div>
        <input class="newEvent-inputStyling" type="date" onchange="model.input.newEvent.date = this.value">

      <div class="newEvent-hill"> 
      </div>
        <div class="newEvent-inputHill">
          <select class="newEvent-select" onchange="model.input.newEvent.slope = this.value">
          <option value=""> Velg Bakke</option>
          ${slopeOptions}
          </select>
        </div>

      <div class="newEvent-comment">
      </div>
        <input class="newEvent-inputStyling" placeholder="Kommentar" type="text" onchange= "model.input.newEvent.comment = this.value">
      <button class="newEvent-addButton" onclick="addEvent()">Legg til</button>
    </div>
  </div>


`;
  return html;
  
}
function PrintComment(input){
  let showComment = ""
  for(let i = 0; i < input.length; i++){
    showComment += `${input[i].comment}`

  }

  return showComment;


}


//Vi trenger: Visning av arrangementer.
//Ja/Nei funksjon.
//Deltaker oversikt på arrangementer.
//Sidevisning av bakker med arrangementer.
//Påmeldte arrange - innlogget.
