let newEvent = model.input.newEvent;
function addEvent() {
  let myEvent = {
    name: newEvent.name,
    date: newEvent.date,
    slope: newEvent.slope,
    comment: newEvent.comment,
  };
  model.data.events.push(myEvent);
  newEvent.name = "";
  newEvent.date = "";
  newEvent.slope = "";
  newEvent.comment = "";

  viewNewEvent();
}
