// function addNewUser(userNameInput, firstNameInput, lastNameInput, homeAdressInput, phoneNumberInput){
//     model.data.users.push(
//         {
//             userName: userNameInput,
//             firstName: firstNameInput,
//             lastName: lastNameInput,
//             phoneNumber: phoneNumberInput,
//             address: homeAdressInput,
//         }
//     )

// }

// function saveInput(emailAdress, password, password2){
//     emailAdress = emailAdressInput
//     password = passwordInput
//     password2 = passwordInput2
//     checkForEmail()
//     checkCorrectPassword()
// }

//  function checkForEmail(){
//      if(emailAdressInput.includes('@') && emailAdressInput.includes('.') && emailAdressInput.indexOf('@') < emailAdressInput.indexOf('.') && !emailAdressInput.includes(' ')){
//         model.data.users.push(
//             {
//                 email: emailAdressInput,
//             });
//      }
//      else{
//         //incorrect;
//      }
// }

// function checkCorrectPassword(){
//     if(passwordInput == passwordInput2){
//         model.data.users.push(

//         )
//     }
//     else{
//         //incorrect
//     }
// }

let registerUser = model.input.registerUser;
function checkUserData(){

    if(!registerUser.userName || !registerUser.firstName || !registerUser.lastName || !registerUser.email || !registerUser.password || !registerUser.confirmPassword || !registerUser.address || !registerUser.phoneNumber){
        alert('Husk å fylle inn alle felter');
    }

    if(registerUser.password !== registerUser.confirmPassword){
        alert('Passordene stemmer ikke overens')
    }

    if(registerUser.email.includes('@') && registerUser.email.includes('.') && registerUser.email.indexOf('@') < registerUser.email.indexOf('.') && !registerUser.email.includes(' ')){
        sendUserData()
    }else{
        alert('Du har ikke skrevet inn en gyldig epost adresse')
    }
}

function sendUserData(){
    let newUser = {
        username: registerUser.userName,
        userId: model.data.users.length + 1, //Dette må vi ha i modellen
        firstName: registerUser.firstName,
        lastName: registerUser.lastName,
        email: registerUser.email,
        password: registerUser.password,
        image: null,
        personalBio: '',
        address: registerUser.address,
        phoneNumber: registerUser.phoneNumber,
    }
    model.data.users.push(newUser);
    model.app.currentPage = "login"

    registerUser.userName = '';
    registerUser.email = '';
            //etc

    updateView();
}

//Andre ting som ikke er i skjermbilder, skal dette legges til?
//input type password