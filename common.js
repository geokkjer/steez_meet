function header() {
    model.app.html.innerHTML = '<h1>Hello</h1>'
}
function updateView(){
    let page = model.app.currentPage;
    if (page == "home") {
        viewHome();
    } else if (page == "login"){
        viewLogin();
    } else {
        document.getElementById('app').innerHTML = 'Error!!'
    }
}