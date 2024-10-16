
function viewNewEvent(){
    header()
    document.getElementById('app').innerHTML += /*html*/`
    
    <h2>Nytt arrangement:</h2>
    <div>navn:</div>
    <input type="text" onchange="nameArrangement()">

    <div>Dato:</div>
    <input type="date" onchange="datesArrangement()">
    <div>Bakke:</div>
    <input type="search" onchange="slopeArrangement()">
    <div>Kommentar:</div>
    <textarea type="text" onchange="commentsArrangement()"></textarea>
    
    <button onclick="commentSubmit()">Submit</button>
    `;
    
    
    
    
}

function Submit(){






    
}












//Vi trenger: Visning av arrangementer.
//Ja/Nei funksjon.
//Deltaker oversikt på arrangementer.
//Sidevisning av bakker med arrangementer.
//Påmeldte arrange - innlogget.