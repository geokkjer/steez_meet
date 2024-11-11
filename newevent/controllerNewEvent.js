function addEvent() {
  let newEvent = model.input.newEvent;
  let myEvent = {
    id: addNewId(),
    name: newEvent.name,
    date: newEvent.date,
    slope: newEvent.slope,
    comment: [
      {
        id: addNewId(),
        userId: "",
        comment: newEvent.comment
      },
    ] 
  };
  model.data.events.push(myEvent);
  newEvent.id = "";
  newEvent.name = "";
  newEvent.date = "";
  newEvent.slope = "";
  newEvent.comment = "";
  console.log(model.data.events)
  viewNewEvent();
  showEvent() 
}
function addNewId(){
  let newId = Math.floor(Math.random()*9999)
  for(let i = 0; i < model.data.events.length; i++){
    
    if(newId === model.data.events[i].id){
        addNewId();
    }


  }
  return newId;
}



/*<!DOCTYPE html>
    <h1>Aktivitetsmelding</h1>
    <div>
        <p id="status">Du er påmeldt til aktiviteten.</p>
        <button id="meldAvButton">Meld av fra aktiviteten</button>
    </div>

    <script>
        // Funksjon som nullstiller aktiviteten
        function nullstillAktivitet() {
            // Finner elementet som viser status
            const statusElement = document.getElementById('status');
            
            // Nullstiller teksten (setter den til standardmelding)
            statusElement.textContent = "Du er ikke påmeldt til aktiviteten.";
        }

        // Legger til event listener på knappen
        const meldAvButton = document.getElementById('meldAvButton');
        meldAvButton.addEventListener('click', nullstillAktivitet);
    </script>

</body>
</html>
*/



