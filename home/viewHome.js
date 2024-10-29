function viewHome(){
    let activities = model.data.events;
    let htmlHome = /*HTML*/`
        <h1>Hei, ${'hello' || 'guest'}</h1>
        `;
    let activitiesHTML = activities.map(activity => /*HTML*/`
        <div>
            <h4>${activity.name}</h4>
            <p><span>Vanskelig: </span>${activity.difficulty}</p>
            <p><span>Når: </span>${activity.date}</p>
            <p><span>Omtaler: </span>Ikke på plass enda..</p>
            
        </div>`
    ).join('');
    
    document.getElementById('main').innerHTML =  htmlHome + activitiesHTML;
    
}




