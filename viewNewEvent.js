
function viewNewEvent(){
    header()
    document.getElementById('app').innerHTML += /*html*/`
    
    <h2>Nytt arrangement:</h2>
    <div>navn:</div>
    <input type="text" onchange="nameArrangement()">

    <div>Dato:</div>
    <input type="text" onchange="datesArrangement()">
    <div>Bakke:</div>
    <input type="text" onchange="datesArrangement()">
    <div>Kommentar:</div>
    <input type="text" onchange="commentsArrangement()">
    <button onclick="commentSubmit()">Submit</button>
    `;
    
    
    
    
}







function eventAnswer(){
    
}