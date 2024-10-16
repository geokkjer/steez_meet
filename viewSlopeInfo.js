


function viewSlopeInfo(){
   let rating = 0; 
   header();
   document.getElementById('app').innerHTML += /*HTML*/` 
   <h1>Bakke Informasjon:</h1>
   <h2>Rangering:<h2>
   <div id="rateMe"></div>
   <input id='textInput' type='number' min=0 max= 5 onchange="rating=this.value"/>
   <button onclick="ratings(rating)">Legg til rating</button>
   `}

function ratings(rating){
    document.getElementById('rateMe').innerHTML += `<h2>${rating}/5<h2>`
}