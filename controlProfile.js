function saveGoal(name, description, amount){
    model.data.users[0].goals.title = name;
    model.data.users[0].goals.description = description;
    model.data.users[0].goals.amount = amount;

    viewProfile()
}