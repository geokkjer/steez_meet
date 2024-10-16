function updateView() {
    let page = model.app.currentPage;
    if (page == "home") {
        viewHome();
    } else if (page == "login") {
        viewLogin();
    } else if (page == "slopes") {
        viewSlopeInfo();
    } else if (page == "profile") {
        viewProfile();
    }
    else {
        document.getElementById('app').innerHTML = 'Error!!'
    }

}