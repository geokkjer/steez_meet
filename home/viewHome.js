function viewHome(){
    htmlHome = /*HTML*/`
        <h1>Arrangementer:</h1>
        `;
    document.getElementById('app').innerHTML = header() + htmlHome + events();   
}

function events(){
    
    let users = [];
    let html = '';
    // for (let i = 0; i < model.data.events.length; i ++){
    //     users.push(model.data.users[i].firstName);
    //     event = model.data.events[i];
    //     // comment = model.data.events[i].comment[i];
    //     eventList += /*HTML*/ `
    //         <li>Navn: ${event.name} Når: ${event.date} Kommenterer: ${event.comment[0].comment} Deltakere: ${users}</li>
    //     `
    // }
    for (let event of model.data.events){
        html += /*html*/ `
            <li>Navn: ${event.name} Når: ${event.date} Kommenterer: ${event.comment[0].comment} Deltakere: ${event.members[0]}</li>
        `
    }
    return html
}
