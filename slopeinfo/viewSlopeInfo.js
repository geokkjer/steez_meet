
function viewSlopeInfo(){
    
    let rating = model.input.slope.rating; 
    header();
    document.getElementById('app').innerHTML += /*HTML*/` 
     <h1>Bakke Informasjon:</h1>
     <h2>Rangering:<h2>
     <div id="rateMe"></div>
     <input id='textInput' type='number' min=1 max= 5 onchange="rating=this.value" placeholder="0/5"/>
     <button onclick="ratings(rating)">Legg til rangering</button>
    <br>
    <h3>Rangeringer til bakken:</h3>
    
    <button onclick="ratingData()">Rangeringer på bakken</button>
     <div id="avgRating">${avgRatings}</div
    <br> 
    
    <h1>Legg til kommentar</h1>
    <textarea rows="8" cols="35" id="submitInput" placeholder="Skriv din kommentar her..."></textarea><p>
    <button onclick="addComment()">Send inn kommentar</button>
    
    <h2>Kommentarer til bakken:</h2>
    <ul id="commentList"></ul>
 
    
   `}

function ratings(rating){
    document.getElementById('rateMe').innerHTML = `<h2>${rating}/5<h2>`
    model.data.slopes[0].ratings.push(parseInt(rating))
}
function ratingData(){
    let avgRatings = 0;
    for(i = 0; i < model.data.slopes[0].ratings.length; i++){ 
       avgRatings += model.data.slopes[0].ratings[i];
    }
    avgRatings = avgRatings/model.data.slopes[0].ratings.length;
    return avgRatings
}

        function addComment() {
            let comment = document.getElementById('submitInput').value; // Her kommer kommentaren man har submitta.
            if (comment) {
                let item = `<li>${comment}</li>`; // Så kommer kommentaren hit.
                document.getElementById('commentList').innerHTML += item; // Her blir ul'en/kommentarene synlig på siden.
                document.getElementById('submitInput').value = ""; // Nullstiller teksten i tekstboksen etter man har submitta.
            } else {
                alert("Du har ikke skrevet inn noen kommentar");
            }
        }
