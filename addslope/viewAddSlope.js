function viewAddSlope(){

    addSlopeHtml = /*HTML*/`
    <div class="mainView">
    <h2>Legg til bakke:<h2>
    <div>Navn: <input type="text" onchange="model.input.addSlope.name = this.value"></div>
    <div>Sted:<input type="text" onchange="model.input.addSlope.location = this.value"></div>
    <div>Vanskelighetsgrad<input type="text" onchange="model.input.addSlope.difficulty = this.value"></div>
    <div>Beskrivelse:<input type="text" onchange="model.input.addSlope.description = this.value"></div>
    <div>Type: <input type="text" onchange="model.input.addSlope.type = this.value"></div>
    <div>Kommentar <input type="text" onchange="model.input.addSlope.comment = this.value"></div>
    <div>Bilde: <input type="file" accept="image/*" onchange="handleFileUpload(event)"></div>
    <button onclick="submitSlope()">Submit</button>
    </div>
    `
    document.getElementById('main').innerHTML =  addSlopeHtml;
}
