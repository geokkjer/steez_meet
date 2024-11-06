// function getSlopes(){
//     for(){}
// }

function checkLogInStatus(){

    if(model.app.isLoggedIn){
        return /*html*/ `<li id="login" onmousedown="logOut()">⎆ Logout</li>`
    }else{
      return /*html*/ `<li id="login" onmousedown="viewLogin()">⎆ Login</li>`
    }
     
}
function logOut(){

    model.app.isLoggedIn = false
    updateView()
}