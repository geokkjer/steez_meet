function viewAddSlope(){

    addSlopeHtml = /*HTML*/`
    <div class="addSlope-outsideContainer">
        <div class="addSlope-container">
            <div class="addSlope-title">
                <h2>Legg til bakke:<h2>
            </div>
            <div class="addSlope-inputContainer"> 
                <div class="addSlope-name">Navn:</div>
                <input class="addSlope-inputName" type="text" onchange="model.input.addSlope.name = this.value">
                
                <div class="addSlope-place">Sted:</div>
                <input class="addSlope-inputPlace" type="text" onchange="model.input.addSlope.location = this.value">
                
                <div class="addSlope-difficulty">Vanskelighetsgrad</div>
                <input class="addSlope-inputDifficulty" type="text" onchange="model.input.addSlope.difficulty = this.value">
                
                <div class="addSlope-description">Beskrivelse:</div>
                <input class="addSlope-inputDescription" type="text" onchange="model.input.addSlope.description = this.value">
                
                <div class="addSlope-type">Type:</div>
                <input class="addSlope-inputType" type="text" onchange="model.input.addSlope.type = this.value">
                
                <div class="addSlope-comment">Kommentar:</div>
                <input class="addSlope-inputComment" type="text" onchange="model.input.addSlope.comment = this.value">
                
                <div class="addSlope-image">Bilde:</div>
                <input class="addSlope-inputImage" type="file" accept="image/*" onchange="handleFileUpload(event)"></div>
                
                <div class="addSlope-addButtonContainer">
                    <button onclick="submitSlope()">Legg til</button>
                </div>
            </div>
        </div>
    </div>
    `
    document.getElementById('main').innerHTML =  addSlopeHtml;
}
