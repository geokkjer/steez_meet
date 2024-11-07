function isLoggedInCheck(){
    if(model.app.isLoggedIn){
        return true
    } else {
        return false
    }
}

function getUserdataByloggedInId(){
    let id = model.app.loggedInId;
    let user = model.data.users.find((x) => x.id == id)
    return user
}
