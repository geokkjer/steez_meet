function updateView() {
    let html = document.getElementById('app');
    html.innerHTML += /*html*/ `
        Hoved side
        <li>${model.data.events[1].name}</li>
    `;
}