function viewHome(){
    htmlHome = /*HTML*/`
        <h1>Arrangementer:</h1>
        `;
    header();
    document.getElementById('main').innerHTML =  htmlHome + events();
    footer();   
}


