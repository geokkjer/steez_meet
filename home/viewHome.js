function viewHome(){
    htmlHome = /*HTML*/`
        <h1>Arrangementer:</h1>
        `;
    document.getElementById('app').innerHTML = header() + htmlHome + events();   
}

function events(){
    let event = '';
    let eventList= '';
    let users = [];
    for (let i = 0; i < model.data.events.length; i ++){
        users.push(model.data.users[i].firstName);
        event = model.data.events[i];
        // comment = model.data.events[i].comment[i];
        eventList += /*HTML*/ `
            <li>Navn: ${event.name} Når: ${event.date} Kommenterer: ${event.comment[0].comment} Deltakere: ${users}</li>
        `
    }
    return eventList
}
