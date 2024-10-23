function saveName(input){
model.input.newEvent.name = input;
}
function saveDate(input){
model.input.newEvent.date = input;
}
function saveSlope(input){
model.input.newEvent.slope = input;
}
function saveComment(input){
model.input.newEvent.comment = input;
}

function addEvent(){
    const newEvent = {
        name: model.input.newEvent.name,
        date: model.input.newEvent.date,
        slope: model.input.newEvent.slope,
        comment: model.input.newEvent.comment,
    }
    model.data.events.push(newEvent)
    emptyNewEventValues();
    viewNewEvent()    
}

function emptyNewEventValues(){
    model.input.newEvent.name = null;
    model.input.newEvent.date = null;
    model.input.newEvent.slope = null;
    model.input.newEvent.comment = null;

}