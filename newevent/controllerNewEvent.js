function addEvent() {
  let newEvent = model.input.newEvent;
  let myEvent = {
    id: addNewId(),
    name: newEvent.name,
    date: newEvent.date,
    slope: model.data.slopes,
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


