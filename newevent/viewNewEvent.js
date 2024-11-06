
function viewNewEvent() {
  
  let html = /*html*/ `
    <h2>Nytt arrangement: </h2>
    <div>${showAddEvent()}</div>
    <h2>sist lagt inn:</h2>
    <div>${showEvent()}</div>


    
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
<h3>Legg til arrangement</h3>
<div class="newEvent-container">
<div>
<label>Navn:</label>
<input type="text" onchange="model.input.newEvent.name = this.value">

</div>
<div>
<label>Dato:</label>
<input type="date" onchange="model.input.newEvent.date = this.value">

</div>
<div>
<label>Bakke:</label>  
<select onchange="model.input.newEvent.slope = this.value">
<option value=""> Velg Bakke</option>
${slopeOptions}
</select>

</div>
<div>
<label>Kommentar:</label>
<input type="text" onchange= "model.input.newEvent.comment = this.value">

</div>
<button onclick="addEvent()">Legg til</button>
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
