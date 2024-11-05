
let avgRatings = model.data.slopes[0].avgRating;

function viewSlopeInfo() {
let slopeHTML = /*HTML*/` 
<h1>Bakke Informasjon:</h1>
<div id="gridInfo">
<h1>Bakkenavn: Hafjell</h1>
<h1>Vanskelighetsgrad: 3/5</h1>
<h1>Type bakke:</h1>

</div>
<div class="slopePhoto">
<img src="/img/slopeBlefjell.png" width="250px">
</div>
</div>

<div id="GridSlopeInfo">

<div class="publicInfo">
<h1>Bakkerangering:</h1>
<div id="showAvgRating"></div>
<h2>Kommentarer til bakken:</h2>
<ul id="commentList"></ul>
</div>

<div class="mySlope">
 <h1>Din rangering:<h1>
     <div id="rateMe"></div>
     <input id='textInput' type='number' min=1 max= 5 onchange="rating=this.value" placeholder="0/5"/>
     <button onclick="ratings(rating),ratingData()">Legg til rangering</button>
     
<h1>Legg til kommentar:</h1>
    <textarea rows="8" cols="35" id="submitInput" placeholder="Skriv din kommentar her..."></textarea><p>
   <button onclick="addComment()">Send inn kommentar:</button>
    <button onclick="viewAddSlope()">Legg til bakke</button>
</div>



</div>




   `;
    header()
    footer()
    document.getElementById("main").innerHTML = slopeHTML;
}



