function saveGoal(name, description, amount){
    model.data.users[0].goals.title = name;
    model.data.users[0].goals.description = description;
    model.data.users[0].goals.amount = amount;

    viewProfile()
}

function createGoalAmount(){
    let goalAmount; 
    for(i = 0; i<model.data.users[0].goals.amount; i++)
        {
        goalAmount = document.getElementById('goalCheckboxes').innerHTML += /*HTML*/`
        <input type="checkbox"/>
        `
        return goalAmount;
    }
}