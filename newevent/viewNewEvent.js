let eventText = "";
function viewNewEvent() {
  header();

  document.getElementById("app").innerHTML += /*html*/ `
    
    <h2>Nytt arrangement:</h2>
    <div>navn:</div>
    <input type="text" onchange="nameArrangement = this.value">

    <div>Dato:</div>
    <input type="date" onchange="datesArrangement = this.value">
    <div>Bakke:</div>
    <input type="text" onchange="slopeArrangement = this.value">
    <div>Kommentar:</div>
    <textarea type="text" onchange="commentsArrangement = this.value"></textarea>
    
    <button onclick="Submit(text)">Submit</button>
    
    <div>${eventText}</div>
    
    `;
}

function Submit() {
let html = "";
for(let i = 0; i < model.input.newEvent.length; i++){
    html += /*html*/`
    
    
    
    `;
}




}

//Vi trenger: Visning av arrangementer.
//Ja/Nei funksjon.
//Deltaker oversikt på arrangementer.
//Sidevisning av bakker med arrangementer.
//Påmeldte arrange - innlogget.
