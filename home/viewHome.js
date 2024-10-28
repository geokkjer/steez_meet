function viewHome(){
    htmlHome = /*HTML*/`
        <h1>Hei, ${'hello' || 'guest'}</h1>
        <div id="events">${events()}</div>
        <style>
            #events{
                height: 100vh;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr ;
                grid-template-areas:
                    'main1'
                    'main2';
                gap: 20px;
            }
        </style>
        `;
   
    document.getElementById('main').innerHTML =  htmlHome;
}


