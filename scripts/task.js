export default class Task {

    static taskClasses = {
        background: 'is-done',
        task: 'task-list__task',
        trashBinButton: 'task-list__btn--trash-bin',
        isDeleted: 'is-deleted',
    };

    constructor() {
    };

    static bindEvents() {
        this.clickOnTask();
        this.clickOnDeleteButton();
    };

    static changeTaskBackground(taskElement) {
        taskElement.classList.toggle(this.taskClasses.background);
    };

    static clickOnTask() {
        document.addEventListener('click', (event) => {
            const taskElement = event.target.closest(`.${this.taskClasses.task}`);
            
            const isTrashBinButton = Boolean(event.target.closest(`.${this.taskClasses.trashBinButton}`));

            if (taskElement && !isTrashBinButton) {
                this.changeTaskBackground(taskElement);
            }
        });
    };

    static clickOnDeleteButton() {
        document.addEventListener('click', (event) => {
            const trashBinButtton = event.target.closest(`.${this.taskClasses.trashBinButton}`);

            if (trashBinButtton) {
                const taskElement = trashBinButtton.closest(`.${this.taskClasses.task}`);

                taskElement.classList.add(this.taskClasses.isDeleted);

                setTimeout(() => {
                    taskElement.remove();
                }, 500);
            }
        });
    };
};
