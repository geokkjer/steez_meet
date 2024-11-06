let avgRatings = model.data.slopes[0].avgRating;
function addNewRating(){
   model.data.slopes[0].ratings.push({}) 
}
function ratings(rating) {
   document.getElementById('rateMe').innerHTML = `<h2>${rating}/5<h2>`
   model.data.slopes[0].ratings.push(parseInt(rating))
}
function ratingData() {  
   let avgRating = 0;
   for (i = 0; i < model.data.slopes[0].ratings.length; i++) {
       avgRating += model.data.slopes[0].ratings[i];
   }
  avgRatings = avgRating / model.data.slopes[0].ratings.length;
   document.getElementById('showAvgRating').innerHTML = `<h2>${parseFloat(avgRatings).toFixed(1)}/5<h2>`
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
