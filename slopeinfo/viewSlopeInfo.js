function viewSlopeInfo(slopeId) {
  if (!slopeId) {
    console.error("slopeId er undefined!");
    return;
  }

  console.log("Sjekker slopeId:", slopeId);
  console.log("Sjekker model.data.slopes:", model.data.slopes);

  const slope = model.data.slopes.find((s) => s.id === slopeId);

  if (!slope) {
    console.error(`Fant ikke bakke med ID ${slopeId}`);
    return;
  }

  console.log("Slope funnet:", slope);

  const slopeName = slope.name;
  const slopeImage = slope.photo;
  const slopeDescription = slope.description;
  const slopeAvgRating = slope.avgRating;
  const slopeRatings = slope.ratings;
  const slopeComments = slope.comment;

  let slopeHTML = /*HTML*/ ` 
<h1>Bakke Informasjon:</h1>
<div id="gridSlopeSite">
    <div class="slopePhoto">
    <img src="${slopeImage}" width="250px">
</div>
<div>
<div class="gridInfo">
    <h1>Bakkenavn: ${slopeName}</h1>
    <h2>Vanskelighetsgrad: 3/5</h2>
    <h1>Beskrivelse:${slopeDescription}</h1>
</div>

<div id="gridSlopeInfo">
 <div class="publicInfo">
    <h1>Bakkerangering:</h1>
<div id="showAvgRating">${slopeAvgRating}</div>
    <h2>Kommentarer til bakken:</h2>
    <ul id="commentList">${slopeComments}</ul>
</div>
<div id="gridSlopeInfo">
  <div class="mySlope">
     <h1>Din rangering:<h1>
<div id="rateMe">${slopeRatings}</div>
     <input id='textInput' type='number' min=1 max= 5 onchange="rating=this.value" placeholder="0/5"/>
     <button onclick="ratings(rating),ratingData()">Legg til rangering</button>
     <h1>Legg til kommentar:</h1>
<textarea rows="8" cols="35" id="submitInput" placeholder="Skriv din kommentar her..."></textarea><p>
<button onclick="addComment()">Send inn kommentar:</button>
</div>
</div>
</div>
</div>
</div>
<button onclick="viewAddSlope()">Legg til bakke</button>
   `;
  header();
  footer();
  document.getElementById("main").innerHTML = slopeHTML;
}
