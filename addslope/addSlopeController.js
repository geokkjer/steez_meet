function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      model.input.addSlope.photo = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function submitSlope() {
  let a = model.input.addSlope;
  let newSlope = {
    name: a.name,
    id: model.data.slopes.length + 1,
    location: a.location,
    description: a.description,
    difficulty: a.difficulty,
    comment: a.comment,
    photo: a.photo || null,
  };
  model.data.slopes.push(newSlope);

  a.name = ``;
  a.location = ``;
  a.description = ``;
  a.difficulty = ``;
  a.comment = ``;
  a.photo = null;
  model.app.currentPage = "slopes"
  updateView();
}
