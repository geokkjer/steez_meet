function updateView() {
    header();
    let page = model.app.currentPage;
    if (page == "home") {
        drawHome();
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
    footer();
}