function viewHome(){
    htmlHome = /*HTML*/`
        <script src="snow/pure-snow.js" defer></script>
        <div id="snow" data-count="200"></div>
        <h1>Arrangementer:</h1>
        `;
    document.getElementById('app').innerHTML = header() + htmlHome + events();   
}

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
