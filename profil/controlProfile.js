function saveGoal(name, description, amount){
    model.data.users[0].goals.title = name;
    model.data.users[0].goals.description = description;
    model.data.users[0].goals.amount = amount;

    viewProfile()
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
