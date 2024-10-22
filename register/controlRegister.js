function addNewUser(userNameInput, firstNameInput, lastNameInput, homeAdressInput, phoneNumberInput, emailAdressInput, passwordInput, passwordInput2){
    model.data.users.push(
        {
            userName: userNameInput,
            firstName: firstNameInput,
            lastName: lastNameInput,
            phoneNumber: phoneNumberInput,
            address: homeAdressInput,
        }
    )
    checkCorrectPassword();
    checkForEmail();

}

 function checkForEmail(){
     if(emailAdressInput.includes('@') && emailAdressInput.includes('.') && emailAdressInput.indexOf('@') < emailAdressInput.indexOf('.') && !emailAdressInput.includes(' ')){
        model.data.users.push(
            {
                email: emailAdressInput,
            });
     }
     else{
        //incorrect;
     }
}

function checkCorrectPassword(){
    if(passwordInput == passwordInput2){
        model.data.users.push
    }
    else{
        //incorrect
    }
}