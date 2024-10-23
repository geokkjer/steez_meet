viewNewEvent()
function viewNewEvent(){
    header()
    let html = /*html*/`
    <h3>Nytt arrangement: </h3>
    <div>${showAddEvent()}</div>
    <div>${showEvent()}</div>


    
    `;
    document.getElementById('main').innerHTML =  html;   
}

function showEvent(){
let html = "";
for(let i = 0; i < model.data.events.length; i++){
    html += /*html*/`
    <p>Navn: ${model.data.events[i].name}</p>
    <p>Dato: ${model.data.events[i].date}</p>
    <p>Bakke: ${model.data.events[i].slope}</p>
    <p>Kommentar: ${model.data.events[i].comment}</p>
   
    
    `;
}
    
    return html;
    
    
}    

function showAddEvent(){
let html = "";
html += /*html*/`
<h3>Legg til arrangement</h3>
<div>
    <label>Navn:</label>
    <input type="text" onchange="saveName(this.value)">

</div>
<div>
    <label>Dato:</label>
    <input type="date" onchange="saveDate(this.value)">

</div>
<div>
    <label>bakke:</label>
    <input type="text" onchange="saveSlope(this.value)">

</div>
<div>
    <label>Kommentar:</label>
    <input type="text" onchange="saveComments(this.value)">

</div>
<button onclick="addEvent()">Legg til</button>


`;
return html;
}
    




    
    
    
    
    






//Vi trenger: Visning av arrangementer.
//Ja/Nei funksjon.
//Deltaker oversikt på arrangementer.
//Sidevisning av bakker med arrangementer.
//Påmeldte arrange - innlogget.