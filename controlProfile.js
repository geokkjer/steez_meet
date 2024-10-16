function saveGoal(name, description, amount){
    model.data.users[0].goals.title = name;
    model.data.users[0].goals.description = description;
    model.data.users[0].goals.amount = amount;

    viewProfile()
}

function createGoalAmount(){
    for(i = 0, i<model.data.users[0].goals.amount, i++)
        {
        document.getElementById('goalCheckboxes').innerHTML = /*HTML*/`
        <input type="checkbox">
        `
    }
}