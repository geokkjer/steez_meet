function saveGoal(name, description, amount){
    model.data.users[0].goals.title = name;
    model.data.users[0].goals.description = description;
    model.data.users[0].goals.amount = amount;

    viewProfile()
}

function progressBar(){
let totalProgress = 0;
        if(document.querySelectorAll('input').checked){
            totalProgress++;
        }
        progressDone.style.width = `${totalProgress / model.data.users[0].goals.amount * 100}%`;
        updateView();






    // let checkedBoxes = 0;
    // for(let i = 0; i < model.data.users[0].goals.amount; i++){
    //     checkedBoxes = model.data.users[0].goals.amount[i];
    // }




    // progress.style.width = `${model.data.users[0].goals.amount.checked / model.data.users[0].goals * 100}`
    //document.querySelectorAll("ul input");
}

function checkboxesChecked(){
    let checkboxArray = document.querySelectorAll('input');
    let counter = 0;
    console.log(checkboxArray, counter)
        for(checkedOff of checkboxArray){
            
            if(checkedOff.checked){
                counter++;
            }
        }
        
        findPercentage(counter)
}

function findPercentage(count){
    let checkboxArray = document.querySelectorAll('input');
    finalCountdown = count / checkboxArray.length * 100;
    drawProgressBar(finalCountdown)
}

function drawProgressBar(finalPercentage){
    let progressDone = document.getElementById('progressDone');
    progressDone.style.width = `${finalPercentage}%`;
    
}

//Vi må først tegne checkboxer x antall goal amount.
//Vi må kunne krysse av disse checkboksene.
//Vi må vite hvor mange ut av det totale antallet som er huket av.
//Vi må finne prosenten av det som er huket av utofra den totale lengden.