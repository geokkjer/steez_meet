function viewAddSlope(){
    header();
    addSlopeHtml = /*HTML*/`
    
    <h2>Legg til bakke:<h2>
    <div>Navn: <input type="text" onchange="nameSlope = this.value"></div>
    <div>Sted:<input type="text" onchange="locationSlope = this.value"></div>
    <div>Vanskelighetsgrad</div>
    <div>Beskrivelse:<input type="text" onchange="descriptionSlope = this.value"></div>
    <div>Type: <input type="text" onchange="typeSlope = this.value"></div>
    <div>Kommentar <input type="text" onchange="commentSlope = this.value"></div>
    
    <button onclick="submitSlope()">Submit</button>
    `
    document.getElementById('app').innerHTML = header() + addSlopeHtml;
}

function submitSlope(){
model.data.slopes.push(
    {
    id: 2,
    name: nameSlope,
    location: locationSlope,
    description: descriptionSlope,
    comment: commentSlope,
}
)

}