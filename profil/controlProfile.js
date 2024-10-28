function saveGoal(name, description, amount){
    model.data.users[0].goals.title = name;
    model.data.users[0].goals.description = description;
    model.data.users[0].goals.amount = amount;

    viewProfile()
}

function progressBar(){
let totalProgress = 0;
        if(document.querySelectorAll("#myCheckBoxes").checked){
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
