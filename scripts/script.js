import { datepicker } from './datepicker.js';
import * as accountWindow from './accountWindow.js';
import { amountOfTasks } from './amountOfTasks.js';

import { addTaskPopup, accountWindowPopup } from './Popup.js';

const addTaskPopupElementsIDs = {
    idOfPopup: 'popup--add-task',
    idOfPopupOpenButton: 'task-list__btn--add-task',
    idOfPopupCloseButton: 'popup--add-task__btn--cancel',
};

addTaskPopup.bindEvents(addTaskPopupElementsIDs);

const accountWindowPopupElementsIDs = {
    idOfPopup: 'popup--account-window',
    idOfPopupOpenButton: 'header__btn--open-account-window',
};

accountWindowPopup.bindEvents(accountWindowPopupElementsIDs);

datepicker.setCurrentDate('[data-js-dateselector-datefield]');
datepicker.createDatepicker('[data-js-dateselector-datefield]');


amountOfTasks.setAmountOfTasks();

// task.setAddTaskWindowAction();
// task.setChangeTaskBackgroundAction();
// task.setDeleteTaskAction();

