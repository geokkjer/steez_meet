function viewAddSlope(){

    addSlopeHtml = /*HTML*/`
    <div class="addSlope-outsideContainer">
        <div class="addSlope-container">
            <div class="addSlope-title">
                <h2>Legg til bakke:<h2>
            </div>
            <div class="addSlope-inputContainer"> 
                <input class="addSlope-InputFieldText" placeholder="Navn" type="text" onchange="model.input.addSlope.name = this.value">
                

                <input class="addSlope-InputFieldText" placeholder="Sted" type="text" onchange="model.input.addSlope.location = this.value">
                

                <input class="addSlope-InputFieldText" placeholder="Vansklighetsgrad" type="text" onchange="model.input.addSlope.difficulty = this.value">
                

                <input class="addSlope-InputFieldText" placeholder="Beskrivelse" type="text" onchange="model.input.addSlope.description = this.value">
                

                <input class="addSlope-InputFieldText" placeholder="Type" type="text" onchange="model.input.addSlope.type = this.value">
                

                <input class="addSlope-InputFieldText" placeholder="Kommentar" type="text" onchange="model.input.addSlope.comment = this.value">
                

                <input class="addSlope-inputFieldImage" type="file" accept="image/*" onchange="handleFileUpload(event)"></div>
                

                    <button class="addSlope-button" onclick="submitSlope()">Legg til</button>

            </div>
        </div>
    </div>
    `
    document.getElementById('main').innerHTML =  addSlopeHtml;
}
