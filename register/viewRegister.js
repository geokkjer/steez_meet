function viewRegister() {
  if (model.app.isLoggedIn == true) {
    registerHtml = /*HTML */ `
    <div class="register-OutsideContainer">
        <div class="register-Container">
            <div class="register-InfoField">
                <div>Brukernavn: </div>
                <div>Fornavn: </div>
                <div>Etternavn: </div>
                <div>Adresse: </div>
                <div>Telefonnummer: </div>
                <div>Epost: </div>
                <div>Passord: </div>
                <div>Bekreft passord: </div>
            </div>
            <div class="register-InputField">
                <input class="register-InputFieldText" placeholder="Eks. Kari123" type="text" onchange="model.input.registerUser.userName = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. Kari" type="text" onchange="model.input.registerUser.firstName = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. Nordmann" type="text" onchange="model.input.registerUser.lastName = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. Storgata 1" type="text" onchange="model.input.registerUser.address = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. 12345678" type="number" onchange="model.input.registerUser.phoneNumber = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. karinordmann@email.com" type="email" onchange="model.input.registerUser.email = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. passord123" type="password" onchange="model.input.registerUser.password = this.value"/>
                <input class="register-InputFieldText" placeholder="Gjenta passord" type="password" onchange="model.input.registerUser.confirmPassword = this.value"/>
               <input type="file" accept="image/*" onchange="handleFileUploadRegister(event)">
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
                <div>Brukernavn: </div>
                <div>Fornavn: </div>
                <div>Etternavn: </div>
                <div>Adresse: </div>
                <div>Telefonnummer: </div>
                <div>Epost: </div>
                <div>Passord: </div>
                <div>Bekreft passord: </div>
            </div>
            <div class="register-InputField">
                <input class="register-InputFieldText" placeholder="Eks. karnor" type="text" onchange="model.input.registerUser.userName = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. Kari" type="text" onchange="model.input.registerUser.firstName = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. Nordmann" type="text" onchange="model.input.registerUser.lastName = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. Storgata 1" type="text" onchange="model.input.registerUser.address = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. 12345678" type="number" onchange="model.input.registerUser.phoneNumber = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. karinordmann@email.com" type="email" onchange="model.input.registerUser.email = this.value"/>
                <input class="register-InputFieldText" placeholder="Eks. passord123" type="password" onchange="model.input.registerUser.password = this.value"/>
                <input class="register-InputFieldText" placeholder="Gjenta passord" type="password" onchange="model.input.registerUser.confirmPassword = this.value"/>
               <input type="file" accept="image/*" onchange="handleFileUploadRegister(event)">
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

