export default class AmountOfTasks {
    constructor() {
    };

    makeAmountOfTasksText() {
        const amount = document.querySelectorAll('.task-list__task').length; 
        
        if (amount % 10  == 1) {
            return amount.toString() + " задача";
        } else if (amount % 10 == 0 || (amount % 10 >= 5 && amount % 10 <= 9)) {
            return amount.toString() + " задач";
        } else if (amount % 10 >= 2 && amount % 10 <= 4) {
            return amount.toString() + " задачи";
        }
    };

    setAmountOfTasks() {
        const amountOfTasksText = this.makeAmountOfTasksText();
        console.a
        $('#task-list--amount-of-tasks').text(amountOfTasksText);
    };
    
}