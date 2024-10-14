function updateView() {
    model.app.html.innerHTML = /*html*/ `
        ${header()}
    `;
    console.log(model.app.html, "hello");
}