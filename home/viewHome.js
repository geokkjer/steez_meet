function viewHome(){
    document.getElementById('app').innerHTML += /*HTML*/`
        <h1>Arrangementer:</h1>
    `
    events();
}

function events(){
    let event = '';
    let comment = '';
    let users = [];
    for (let i = 0; i < model.data.events.length; i ++){
        users.push(model.data.users[i].firstName);
        event = model.data.events[i];
        
        // comment = model.data.events[i].comment[i];
        document.getElementById('app').innerHTML += /*HTML*/ `
            <li>Navn: ${event.name} Når: ${event.date} Kommenterer: ${event.comment[0].comment} Deltakere: ${users}</li>
        `
    }
    console.log(users)
}
