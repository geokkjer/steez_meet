


function viewSlopeInfo(){
    
    let rating = model.input.slope.rating; 
    header();
    document.getElementById('app').innerHTML += /*HTML*/` 
     <h1>Bakke Informasjon:</h1>
     <h2>Rangering:<h2>
     <div id="rateMe"></div>
     <input id='textInput' type='number' min=0 max= 5 onchange="rating=this.value" placeholder="0/5"/>
     <button onclick="ratings(rating)">Legg til rangering</button>
    <br>
    <h3>Rangeringer til bakken:</h3>
    
    <button onclick="ratingAvg(ratings)">Rangeringer på bakken</button>
     <div id="avgRating">5/5</div
    <br> 
    <h2>Legg til kommentar</h2>
    <textarea rows="8" cols="35" type="text" id="inputCommentary" placeholder="Skriv din kommentar her..."></textarea>
    <br><button id="submitCommentary">Legg til kommentar!</button><p>
    <ul id="addCommentary"></ul>
    <h3>Kommentarer til bakken:</h3>
 
    
   `}

function ratings(rating){
    document.getElementById('rateMe').innerHTML += `<h2>${rating}/5<h2>`
}
function ratingData(ratings){
    document.getElementById('rateMe').innerHTML += `<h2>${ratings}/5<h2>` 
    

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
