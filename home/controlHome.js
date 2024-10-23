function events(){
    
    let users = [];
    let eventsHtml = '';
    for (let i = 0; i < model.data.events.length; i ++){
        users.push(model.data.users[i].firstName);
    }
    for (let event of model.data.events){
        eventsHtml += /*html*/ `
            <li>Navn: ${event.name} Når: ${event.date} Kommenterer: ${users}</li>
        `
    }
    return eventsHtml
}