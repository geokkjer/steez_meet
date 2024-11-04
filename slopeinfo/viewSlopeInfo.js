
let avgRatings = model.data.slopes[0].avgRating;

function viewSlopeInfo() {
let slopeHTML = /*HTML*/` 
<h1>Bakke Informasjon:</h1>
<h1>BLEFJELL</h1>
<img src="/img/slopeBlefjell.png" width="250px">
     <h1>Din rangering:<h1>
     <div id="rateMe"></div>
     <input id='textInput' type='number' min=1 max= 5 onchange="rating=this.value" placeholder="0/5"/>
     <button onclick="ratings(rating),ratingData()">Legg til rangering</button>
    <br>
    <h2>Rangering på denne bakken:</h2>
     <div id="showAvgRating"></div>
     
    <br> 
    
    <h1>Legg til kommentar:</h1>
    <textarea rows="8" cols="35" id="submitInput" placeholder="Skriv din kommentar her..."></textarea><p>
    <button onclick="addComment()">Send inn kommentar:</button>
    
    <h2>Kommentarer til bakken:</h2>
    <ul id="commentList"></ul>
    <button onclick="viewAddSlope()">Legg til bakke</button>
   `;
    header()
    footer()
    document.getElementById("main").innerHTML = slopeHTML;
}



