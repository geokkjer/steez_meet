function viewRegister() {
  if (model.app.isLoggedIn == true) {
    registerHtml = /*HTML */ `
    <div class="register-OutsideContainer">
        <div class="register-Container">
            <div class="register-InfoField">
            </div>
            <div class="register-InputField">
                <input class="register-InputFieldText" placeholder="Brukernavn" type="text" onchange="model.input.registerUser.userName = this.value"/>
                <input class="register-InputFieldText" placeholder="Fornavn" type="text" onchange="model.input.registerUser.firstName = this.value"/>
                <input class="register-InputFieldText" placeholder="Etternavn" type="text" onchange="model.input.registerUser.lastName = this.value"/>
                <input class="register-InputFieldText" placeholder="Adresse" type="text" onchange="model.input.registerUser.address = this.value"/>
                <input class="register-InputFieldText" placeholder="Telefonnummer" type="number" onchange="model.input.registerUser.phoneNumber = this.value"/>
                <input class="register-InputFieldText" placeholder="Email" type="email" onchange="model.input.registerUser.email = this.value"/>
                <input class="register-InputFieldText" placeholder="Passord" type="password" onchange="model.input.registerUser.password = this.value"/>
                <input class="register-InputFieldText" placeholder="Gjenta passord" type="password" onchange="model.input.registerUser.confirmPassword = this.value"/>
               <input class="register-inputFieldImage" type="file" accept="image/*" onchange="handleFileUploadRegister(event)">
            </div>
            <div class="register-ButtonRegister">
                <button class="register-ButtonRegisterPage" onclick="checkUserData()">Legg til Endringer</button>
            </div>
        </div>
    </div>
    `;
  } else {
    registerHtml = /*HTML */ `
    <div class="register-OutsideContainer">
        <div class="register-Container">
            <div class="register-InfoField">
            </div>
            <div class="register-InputField">
                <input class="register-InputFieldText" placeholder="Brukernavn" type="text" onchange="model.input.registerUser.userName = this.value"/>
                <input class="register-InputFieldText" placeholder="Fornavn" type="text" onchange="model.input.registerUser.firstName = this.value"/>
                <input class="register-InputFieldText" placeholder="Etternavn" type="text" onchange="model.input.registerUser.lastName = this.value"/>
                <input class="register-InputFieldText" placeholder="Adresse" type="text" onchange="model.input.registerUser.address = this.value"/>
                <input class="register-InputFieldText" placeholder="Telefonnummer" type="number" onchange="model.input.registerUser.phoneNumber = this.value"/>
                <input class="register-InputFieldText" placeholder="Email" type="email" onchange="model.input.registerUser.email = this.value"/>
                <input class="register-InputFieldText" placeholder="Passord" type="password" onchange="model.input.registerUser.password = this.value"/>
                <input class="register-InputFieldText" placeholder="Gjenta passord" type="password" onchange="model.input.registerUser.confirmPassword = this.value"/>
               <input class="register-inputFieldImage" type="file" accept="image/*" onchange="handleFileUploadRegister(event)">
            </div>
            <div class="register-ButtonRegister">
                <u onclick="viewLogin()">Allerede bruker?</u>
                <button class="register-ButtonRegisterPage" onclick="checkUserData()">Registrer</button>
            </div>
        </div>
    </div>
    `;
  }
  document.getElementById("main").innerHTML = registerHtml;
}

