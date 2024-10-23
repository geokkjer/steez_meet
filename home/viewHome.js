function viewHome(){
    htmlHome = /*HTML*/`
        <h1>Arrangementer:</h1>
        ${events()}
        `;
    header();
    document.getElementById('main').innerHTML =  htmlHome;
    footer();   
}


