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
    } else if (page == "newevent") {
        viewNewEvent();
    }
    else {
        document.getElementById('app').innerHTML = 'Error!!'
    }

}