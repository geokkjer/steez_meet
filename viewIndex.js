function updateView() {
    document.getElementById('app').innerHTML = /*html*/ `
        ${model.data.users}
    `;
    console.log(model.data.users, "hello");
}