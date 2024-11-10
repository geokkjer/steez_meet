let registerUser = model.input.registerUser;
function editData() {
  sendUserData();
}
function checkUserData() {
  if (
    !registerUser.userName ||
    !registerUser.firstName ||
    !registerUser.lastName ||
    !registerUser.email ||
    !registerUser.password ||
    !registerUser.confirmPassword ||
    !registerUser.address ||
    !registerUser.phoneNumber
  ) {
    alert("Husk å fylle inn alle felter");
  }

  if (registerUser.password !== registerUser.confirmPassword) {
    alert("Passordene stemmer ikke overens");
  }

  if (
    registerUser.email.includes("@") &&
    registerUser.email.includes(".") &&
    registerUser.email.indexOf("@") < registerUser.email.indexOf(".") &&
    !registerUser.email.includes(" ")
  ) {
    sendUserData();
  } else {
    alert("Du har ikke skrevet inn en gyldig epost adresse");
  }
}
function handleFileUploadRegister(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      model.input.registerUser.image = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function sendUserData() {
  if (model.app.isLoggedIn) {
    let newUser = {
      username: registerUser.userName,
      userId: model.data.users.length + 1,
      firstName: registerUser.firstName,
      lastName: registerUser.lastName,
      email: registerUser.email,
      password: registerUser.password,
      image: model.input.registerUser.image || null,
      personalBio: "",
      address: registerUser.address,
      phoneNumber: registerUser.phoneNumber,
    };
    model.data.users.push(newUser);
    model.app.currentPage = "home";
    updateView();
  } else {
    let newUser = {
      username: registerUser.userName,
      userId: model.data.users.length + 1,
      firstName: registerUser.firstName,
      lastName: registerUser.lastName,
      email: registerUser.email,
      password: registerUser.password,
      image: model.input.registerUser.image || null,
      personalBio: "",
      address: registerUser.address,
      phoneNumber: registerUser.phoneNumber,
    };
    model.data.users.push(newUser);
    model.app.currentPage = "login";

    registerUser.userName = "";
    registerUser.firstName = "";
    registerUser.lastName = "";
    registerUser.address = "";
    registerUser.phoneNumber = "";
    registerUser.email = "";
    registerUser.password = "";
    registerUser.confirmPassword = "";
    (registerUser.image = null), updateView();
  }
}
