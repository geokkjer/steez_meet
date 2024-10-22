function viewAddSlope(){
    header();
    addSlopeHtml = /*HTML*/`
    
    <h2>Legg til bakke:<h2>
    <div>Navn:</div>
    <input type="text" onchange="nameSlope = this.value">

    <div>Sted:</div>
    <input type="text" onchange="locationSlope = this.value">

    <div>Vanskelighetsgrad</div>
    
    <div>Beskrivelse:</div>
    <input type="text" onchange="descriptionSlope = this.value">

    <div>Type:</div>
    <input type="text" onchange="typeSlope = this.value">

    <div>Kommentar</div>
    <input type="text" onchange="commentSlope = this.value">  

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