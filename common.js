function isLoggedInCheck(){
    if(model.app.isLoggedIn){
        return true
    } else {
        return false
    }
}
function getUserdataByloggedInId(){
    let id = model.app.loggedInId;
    let userData = model.data.users.find((x) => x.id == id)
    return userData
}
