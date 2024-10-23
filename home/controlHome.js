function events(){
    
    let users = [];
    let html = '';
    for (let i = 0; i < model.data.events.length; i ++){
        users.push(model.data.users[i].firstName);
    }
    for (let event of model.data.events){
        html += /*html*/ `
            <li>Navn: ${event.name} Når: ${event.date} Kommenterer: ${users}</li>
        `
    }
    return html
}