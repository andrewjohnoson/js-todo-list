import Task from  './Task.js';
import AmountOfTasks from './AmountOfTasks.js';

class TaskList {
    #key = 'taskList';

    #taskListSectionTag = '[data-js-task-list-section]';

    // tasks = [new Task({ name: "Изучить структуры С++" }), new Task({ name: "Начать изучать React" }), new Task({ name: "Продолжить изучение JavaScript" })];
    tasks = [];

    constructor() {
        this.taskListSectionElement = document.querySelector(this.#taskListSectionTag);
    };

    getTasks() {
        const tasksJSON = localStorage.getItem(this.#key);
        const tasksObj = JSON.parse(tasksJSON);

        const tasksArr = Object.values(tasksObj);

        tasksArr.forEach((element) => {
            this.tasks.push(new Task(element));
        });
    };

    printTasks() {
        this.getTasks();

        this.tasks.forEach((element) => {
            this.taskListSectionElement.innerHTML += 
            /*html*/`
                <div class="task-list__task">
                    <h3 class="task-list__task__text">${element.name}</h3>
                    <div class="task-list__btn--trash-bin">
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.41811 26H17.5824C19.4712 26 20.9238 24.4374 21.0164 22.5312L21.6971 8.58299H2.30289L2.98365 22.5312C3.07623 24.4348 4.5288 26 6.41811 26ZM1.63572 4.1553H22.3643C23.2639 4.1553 24 4.89876 24 5.80736V7.55699H0V5.80736C0 4.89876 0.736101 4.1553 1.63572 4.1553ZM10.3869 0H13.6136C14.4131 0 15.1396 0.33031 15.6654 0.861348C16.1912 1.39239 16.5182 2.12618 16.5182 2.93366V3.12931H15.1638V2.93366C15.1638 2.50375 14.9892 2.11195 14.7079 1.82789C14.4272 1.54433 14.0387 1.36748 13.6136 1.36748H10.3869C9.97434 1.36748 9.59799 1.53213 9.31925 1.79841L9.29208 1.82789C9.01082 2.11195 8.83623 2.50375 8.83623 2.93366V3.12931H7.48176V2.93366C7.48176 2.12618 7.8088 1.39239 8.33459 0.861348L8.37635 0.822219C8.89912 0.314049 9.60855 0 10.3869 0ZM11.5597 12.4766C11.5597 12.1935 11.7872 11.9638 12.0679 11.9638C12.3482 11.9638 12.5756 12.1935 12.5756 12.4766V21.0804C12.5756 21.3635 12.3482 21.5932 12.0679 21.5932C11.7872 21.5932 11.5597 21.3635 11.5597 21.0804V12.4766ZM16.3436 12.4786C16.3431 12.1966 16.5686 11.9669 16.8478 11.9659C17.127 11.9649 17.3545 12.193 17.3555 12.4751L17.433 21.0784C17.434 21.3604 17.208 21.5901 16.9288 21.5911C16.6496 21.5921 16.4221 21.3645 16.4211 21.0824L16.3436 12.4786ZM6.56704 12.4786C6.56654 12.1966 6.79195 11.9669 7.07119 11.9659C7.35044 11.9649 7.57786 12.193 7.57887 12.4751L7.65635 21.0784C7.65686 21.3604 7.43145 21.5901 7.1522 21.5911C6.87296 21.5921 6.64553 21.3645 6.64453 21.0824L6.56704 12.4786Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            `
        });

        AmountOfTasks.setAmountOfTasks();
    }

    saveTasks() {
        let tasksObj = {};

        for (let i = 0; i < this.tasks.length; i++) {
            tasksObj[i] = this.tasks[i];
        }

        const tasksJSON = JSON.stringify(tasksObj);

        localStorage.setItem(this.#key, tasksJSON);
    };
};

const taskList = new TaskList();
// taskList.saveTasks();

taskList.printTasks();

