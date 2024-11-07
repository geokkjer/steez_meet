function isLoggedInCheck(){
    if(model.app.isLoggedIn){
        return true
    } else {
        return false
    }
}
function getUserdataByloggedInId(){
    let id = model.app.loggedInId;
    model.app.userData = model.data.users.find((x) => x.id == id)
}
