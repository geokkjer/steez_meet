


function viewSlopeInfo(){
    let rating = 0; 
    header();
    document.getElementById('app').innerHTML += /*HTML*/` 
     <h1>Bakke Informasjon:</h1>
     <h2>Rangering:<h2>
     <div id="rateMe"></div>
     <input id='textInput' type='number' min=0 max= 5 onchange="rating=this.value" placeholder="0/5"/>
     <button onclick="ratings(rating)">Legg til rangering</button>
     <h1>Rangeringer</h1>
    <h2>Legg til kommentar</h2>
    <textarea rows="8" cols="35" type="text" id="inputCommentary" placeholder="Skriv din kommentar her..."></textarea>
    <br><button id="submitCommentary">Legg til kommentar!</button><p>
    <h3>Kommentarer til bakken:</h3>
    <ul id="addCommentary"></ul>
   `}

function ratings(rating){
    document.getElementById('rateMe').innerHTML += `<h2>${rating}/5<h2>`
}
function ratingData(){
        
}
        document.getElementById('submitCommentary').addEventListener('click', function() {
            const textInput = document.getElementById('inputCommentary');
            const output = document.getElementById('addCommentary');
            const inputText = textInput.value;
            if (inputText !== "") {
                output.innerHTML += `<li>${inputText}</li>`;
                textInput.value = "";
            }
        });
        function submitCommentary(){}
