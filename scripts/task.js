import { datepicker } from "./datepicker.js";

/* создание дата-пикера для выбора даты при создании задачи */

const taskDateTag = '[data-js-form-input-task-date]';

createDatepickerById(taskDateId);


/* открытие/закрытие поп-апа для создания задач */

const addTaskWindow = document.getElementById('popup--add-task');

// const addTaskWindowAddButton = document.getElementById('popup__btn--add-task-add');

const addTaskWindowCancelButton = document.getElementById('popup__btn--add-task-cancel');

const addTaskButton = document.getElementById('btn--add-task');

export const setAddTaskWindowAction = () => {
    addTaskButton.addEventListener('click', (event) => {
        event.preventDefault();
        setCurrentDateById(taskDateId);
        addTaskWindow.classList.add('active');
    });

    addTaskWindowCancelButton.addEventListener('click', () => {
        addTaskWindow.classList.remove('active');
    });

    addTaskWindow.addEventListener('click', (event) => {
        if (event.target === addTaskWindow) {
            addTaskWindow.classList.remove('active');
        }
    });
};


/* изменение цвета фона задачи */

const clickOnTask = (taskElement) => {
    taskElement.classList.toggle('is-done');
};

export const setChangeTaskBackgroundAction = () => {
    document.addEventListener('click', (event) => {
        const taskElement = event.target.closest('.task');

        const element = event.target.closest('.btn--trash-bin');
        const isTrashBin = element?.classList?.contains('btn--trash-bin');

        if (taskElement && !isTrashBin) {
            clickOnTask(taskElement); 
        }
    });
};

/* удаление задачи */

export const setDeleteTaskAction = () => {
    document.addEventListener('click', (event) => {
        const trashBinButton = event.target.closest('.btn--trash-bin');
    
        if (trashBinButton) {
            const taskElement = trashBinButton.closest('.task');
    
            taskElement.classList.add('is-deleted');
    
            setTimeout(() => {
                taskElement.remove();
            }, 500);
        }
    });
};

